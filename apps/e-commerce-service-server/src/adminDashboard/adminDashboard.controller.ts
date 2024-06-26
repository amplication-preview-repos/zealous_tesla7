import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdminDashboardService } from "./adminDashboard.service";
import { AdminDashboardControllerBase } from "./base/adminDashboard.controller.base";

@swagger.ApiTags("adminDashboards")
@common.Controller("adminDashboards")
export class AdminDashboardController extends AdminDashboardControllerBase {
  constructor(protected readonly service: AdminDashboardService) {
    super(service);
  }
}
