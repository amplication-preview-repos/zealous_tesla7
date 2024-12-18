import * as graphql from "@nestjs/graphql";
import { ContentManagementResolverBase } from "./base/contentManagement.resolver.base";
import { ContentManagement } from "./base/ContentManagement";
import { ContentManagementService } from "./contentManagement.service";

@graphql.Resolver(() => ContentManagement)
export class ContentManagementResolver extends ContentManagementResolverBase {
  constructor(protected readonly service: ContentManagementService) {
    super(service);
  }
}
