import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FilterService } from "./filter.service";
import { FilterControllerBase } from "./base/filter.controller.base";

@swagger.ApiTags("filters")
@common.Controller("filters")
export class FilterController extends FilterControllerBase {
  constructor(protected readonly service: FilterService) {
    super(service);
  }
}
