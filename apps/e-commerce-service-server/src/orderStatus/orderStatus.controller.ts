import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrderStatusService } from "./orderStatus.service";
import { OrderStatusControllerBase } from "./base/orderStatus.controller.base";

@swagger.ApiTags("orderStatuses")
@common.Controller("orderStatuses")
export class OrderStatusController extends OrderStatusControllerBase {
  constructor(protected readonly service: OrderStatusService) {
    super(service);
  }
}
