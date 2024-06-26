import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { DiscountController } from "../discount.controller";
import { DiscountService } from "../discount.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  code: "exampleCode",
  createdAt: new Date(),
  description: "exampleDescription",
  discountAmount: 42.42,
  id: "exampleId",
  updatedAt: new Date(),
  validFrom: new Date(),
  validTo: new Date(),
};
const CREATE_RESULT = {
  code: "exampleCode",
  createdAt: new Date(),
  description: "exampleDescription",
  discountAmount: 42.42,
  id: "exampleId",
  updatedAt: new Date(),
  validFrom: new Date(),
  validTo: new Date(),
};
const FIND_MANY_RESULT = [
  {
    code: "exampleCode",
    createdAt: new Date(),
    description: "exampleDescription",
    discountAmount: 42.42,
    id: "exampleId",
    updatedAt: new Date(),
    validFrom: new Date(),
    validTo: new Date(),
  },
];
const FIND_ONE_RESULT = {
  code: "exampleCode",
  createdAt: new Date(),
  description: "exampleDescription",
  discountAmount: 42.42,
  id: "exampleId",
  updatedAt: new Date(),
  validFrom: new Date(),
  validTo: new Date(),
};

const service = {
  createDiscount() {
    return CREATE_RESULT;
  },
  discounts: () => FIND_MANY_RESULT,
  discount: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Discount", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DiscountService,
          useValue: service,
        },
      ],
      controllers: [DiscountController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /discounts", async () => {
    await request(app.getHttpServer())
      .post("/discounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        validFrom: CREATE_RESULT.validFrom.toISOString(),
        validTo: CREATE_RESULT.validTo.toISOString(),
      });
  });

  test("GET /discounts", async () => {
    await request(app.getHttpServer())
      .get("/discounts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          validFrom: FIND_MANY_RESULT[0].validFrom.toISOString(),
          validTo: FIND_MANY_RESULT[0].validTo.toISOString(),
        },
      ]);
  });

  test("GET /discounts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/discounts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /discounts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/discounts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        validFrom: FIND_ONE_RESULT.validFrom.toISOString(),
        validTo: FIND_ONE_RESULT.validTo.toISOString(),
      });
  });

  test("POST /discounts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/discounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        validFrom: CREATE_RESULT.validFrom.toISOString(),
        validTo: CREATE_RESULT.validTo.toISOString(),
      })
      .then(function () {
        agent
          .post("/discounts")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
