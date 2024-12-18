import { Module } from "@nestjs/common";
import { AdminDashboardModuleBase } from "./base/adminDashboard.module.base";
import { AdminDashboardService } from "./adminDashboard.service";
import { AdminDashboardController } from "./adminDashboard.controller";
import { AdminDashboardResolver } from "./adminDashboard.resolver";

@Module({
  imports: [AdminDashboardModuleBase],
  controllers: [AdminDashboardController],
  providers: [AdminDashboardService, AdminDashboardResolver],
  exports: [AdminDashboardService],
})
export class AdminDashboardModule {}
