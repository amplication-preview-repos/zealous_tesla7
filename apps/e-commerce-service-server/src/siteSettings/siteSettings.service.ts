import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SiteSettingsServiceBase } from "./base/siteSettings.service.base";

@Injectable()
export class SiteSettingsService extends SiteSettingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
