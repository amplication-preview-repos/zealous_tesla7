import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContentManagementServiceBase } from "./base/contentManagement.service.base";

@Injectable()
export class ContentManagementService extends ContentManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
