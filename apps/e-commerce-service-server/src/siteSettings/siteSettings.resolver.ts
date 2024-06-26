import * as graphql from "@nestjs/graphql";
import { SiteSettingsResolverBase } from "./base/siteSettings.resolver.base";
import { SiteSettings } from "./base/SiteSettings";
import { SiteSettingsService } from "./siteSettings.service";

@graphql.Resolver(() => SiteSettings)
export class SiteSettingsResolver extends SiteSettingsResolverBase {
  constructor(protected readonly service: SiteSettingsService) {
    super(service);
  }
}
