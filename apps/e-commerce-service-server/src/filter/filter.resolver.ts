import * as graphql from "@nestjs/graphql";
import { FilterResolverBase } from "./base/filter.resolver.base";
import { Filter } from "./base/Filter";
import { FilterService } from "./filter.service";

@graphql.Resolver(() => Filter)
export class FilterResolver extends FilterResolverBase {
  constructor(protected readonly service: FilterService) {
    super(service);
  }
}
