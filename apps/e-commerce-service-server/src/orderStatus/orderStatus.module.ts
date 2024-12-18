import { Module } from "@nestjs/common";
import { OrderStatusModuleBase } from "./base/orderStatus.module.base";
import { OrderStatusService } from "./orderStatus.service";
import { OrderStatusController } from "./orderStatus.controller";
import { OrderStatusResolver } from "./orderStatus.resolver";

@Module({
  imports: [OrderStatusModuleBase],
  controllers: [OrderStatusController],
  providers: [OrderStatusService, OrderStatusResolver],
  exports: [OrderStatusService],
})
export class OrderStatusModule {}
