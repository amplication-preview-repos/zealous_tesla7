import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HelpDeskServiceBase } from "./base/helpDesk.service.base";

@Injectable()
export class HelpDeskService extends HelpDeskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
