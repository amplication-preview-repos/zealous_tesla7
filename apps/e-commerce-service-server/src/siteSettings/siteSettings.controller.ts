import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SiteSettingsService } from "./siteSettings.service";
import { SiteSettingsControllerBase } from "./base/siteSettings.controller.base";

@swagger.ApiTags("siteSettings")
@common.Controller("siteSettings")
export class SiteSettingsController extends SiteSettingsControllerBase {
  constructor(protected readonly service: SiteSettingsService) {
    super(service);
  }
}
