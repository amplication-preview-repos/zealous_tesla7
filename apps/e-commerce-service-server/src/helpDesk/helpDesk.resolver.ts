import * as graphql from "@nestjs/graphql";
import { HelpDeskResolverBase } from "./base/helpDesk.resolver.base";
import { HelpDesk } from "./base/HelpDesk";
import { HelpDeskService } from "./helpDesk.service";

@graphql.Resolver(() => HelpDesk)
export class HelpDeskResolver extends HelpDeskResolverBase {
  constructor(protected readonly service: HelpDeskService) {
    super(service);
  }
}
