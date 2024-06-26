/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ShippingService } from "../shipping.service";
import { ShippingCreateInput } from "./ShippingCreateInput";
import { Shipping } from "./Shipping";
import { ShippingFindManyArgs } from "./ShippingFindManyArgs";
import { ShippingWhereUniqueInput } from "./ShippingWhereUniqueInput";
import { ShippingUpdateInput } from "./ShippingUpdateInput";
import { DeliveryFindManyArgs } from "../../delivery/base/DeliveryFindManyArgs";
import { Delivery } from "../../delivery/base/Delivery";
import { DeliveryWhereUniqueInput } from "../../delivery/base/DeliveryWhereUniqueInput";

export class ShippingControllerBase {
  constructor(protected readonly service: ShippingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Shipping })
  async createShipping(
    @common.Body() data: ShippingCreateInput
  ): Promise<Shipping> {
    return await this.service.createShipping({
      data: {
        ...data,

        order: data.order
          ? {
              connect: data.order,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        order: {
          select: {
            id: true,
          },
        },

        shippingCost: true,
        shippingDate: true,
        shippingMethod: true,
        trackingNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Shipping] })
  @ApiNestedQuery(ShippingFindManyArgs)
  async shippings(@common.Req() request: Request): Promise<Shipping[]> {
    const args = plainToClass(ShippingFindManyArgs, request.query);
    return this.service.shippings({
      ...args,
      select: {
        createdAt: true,
        id: true,

        order: {
          select: {
            id: true,
          },
        },

        shippingCost: true,
        shippingDate: true,
        shippingMethod: true,
        trackingNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Shipping })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async shipping(
    @common.Param() params: ShippingWhereUniqueInput
  ): Promise<Shipping | null> {
    const result = await this.service.shipping({
      where: params,
      select: {
        createdAt: true,
        id: true,

        order: {
          select: {
            id: true,
          },
        },

        shippingCost: true,
        shippingDate: true,
        shippingMethod: true,
        trackingNumber: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Shipping })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateShipping(
    @common.Param() params: ShippingWhereUniqueInput,
    @common.Body() data: ShippingUpdateInput
  ): Promise<Shipping | null> {
    try {
      return await this.service.updateShipping({
        where: params,
        data: {
          ...data,

          order: data.order
            ? {
                connect: data.order,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          order: {
            select: {
              id: true,
            },
          },

          shippingCost: true,
          shippingDate: true,
          shippingMethod: true,
          trackingNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Shipping })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteShipping(
    @common.Param() params: ShippingWhereUniqueInput
  ): Promise<Shipping | null> {
    try {
      return await this.service.deleteShipping({
        where: params,
        select: {
          createdAt: true,
          id: true,

          order: {
            select: {
              id: true,
            },
          },

          shippingCost: true,
          shippingDate: true,
          shippingMethod: true,
          trackingNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/deliveries")
  @ApiNestedQuery(DeliveryFindManyArgs)
  async findDeliveries(
    @common.Req() request: Request,
    @common.Param() params: ShippingWhereUniqueInput
  ): Promise<Delivery[]> {
    const query = plainToClass(DeliveryFindManyArgs, request.query);
    const results = await this.service.findDeliveries(params.id, {
      ...query,
      select: {
        createdAt: true,
        deliveryAddress: true,
        deliveryDate: true,
        deliveryStatus: true,
        id: true,

        shipping: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/deliveries")
  async connectDeliveries(
    @common.Param() params: ShippingWhereUniqueInput,
    @common.Body() body: DeliveryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      deliveries: {
        connect: body,
      },
    };
    await this.service.updateShipping({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/deliveries")
  async updateDeliveries(
    @common.Param() params: ShippingWhereUniqueInput,
    @common.Body() body: DeliveryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      deliveries: {
        set: body,
      },
    };
    await this.service.updateShipping({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/deliveries")
  async disconnectDeliveries(
    @common.Param() params: ShippingWhereUniqueInput,
    @common.Body() body: DeliveryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      deliveries: {
        disconnect: body,
      },
    };
    await this.service.updateShipping({
      where: params,
      data,
      select: { id: true },
    });
  }
}