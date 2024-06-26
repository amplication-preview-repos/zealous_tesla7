import * as graphql from "@nestjs/graphql";
import { OrderStatusResolverBase } from "./base/orderStatus.resolver.base";
import { OrderStatus } from "./base/OrderStatus";
import { OrderStatusService } from "./orderStatus.service";

@graphql.Resolver(() => OrderStatus)
export class OrderStatusResolver extends OrderStatusResolverBase {
  constructor(protected readonly service: OrderStatusService) {
    super(service);
  }
}
