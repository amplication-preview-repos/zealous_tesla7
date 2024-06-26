import * as graphql from "@nestjs/graphql";
import { AdminDashboardResolverBase } from "./base/adminDashboard.resolver.base";
import { AdminDashboard } from "./base/AdminDashboard";
import { AdminDashboardService } from "./adminDashboard.service";

@graphql.Resolver(() => AdminDashboard)
export class AdminDashboardResolver extends AdminDashboardResolverBase {
  constructor(protected readonly service: AdminDashboardService) {
    super(service);
  }
}
