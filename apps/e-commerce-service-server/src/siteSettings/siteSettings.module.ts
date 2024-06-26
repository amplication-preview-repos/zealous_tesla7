import { Module } from "@nestjs/common";
import { SiteSettingsModuleBase } from "./base/siteSettings.module.base";
import { SiteSettingsService } from "./siteSettings.service";
import { SiteSettingsController } from "./siteSettings.controller";
import { SiteSettingsResolver } from "./siteSettings.resolver";

@Module({
  imports: [SiteSettingsModuleBase],
  controllers: [SiteSettingsController],
  providers: [SiteSettingsService, SiteSettingsResolver],
  exports: [SiteSettingsService],
})
export class SiteSettingsModule {}
