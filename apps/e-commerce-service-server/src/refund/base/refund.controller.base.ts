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
import { RefundService } from "../refund.service";
import { RefundCreateInput } from "./RefundCreateInput";
import { Refund } from "./Refund";
import { RefundFindManyArgs } from "./RefundFindManyArgs";
import { RefundWhereUniqueInput } from "./RefundWhereUniqueInput";
import { RefundUpdateInput } from "./RefundUpdateInput";

export class RefundControllerBase {
  constructor(protected readonly service: RefundService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Refund })
  async createRefund(@common.Body() data: RefundCreateInput): Promise<Refund> {
    return await this.service.createRefund({
      data: {
        ...data,

        payment: data.payment
          ? {
              connect: data.payment,
            }
          : undefined,
      },
      select: {
        amount: true,
        createdAt: true,
        id: true,

        payment: {
          select: {
            id: true,
          },
        },

        reason: true,
        refundDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Refund] })
  @ApiNestedQuery(RefundFindManyArgs)
  async refunds(@common.Req() request: Request): Promise<Refund[]> {
    const args = plainToClass(RefundFindManyArgs, request.query);
    return this.service.refunds({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        id: true,

        payment: {
          select: {
            id: true,
          },
        },

        reason: true,
        refundDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Refund })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async refund(
    @common.Param() params: RefundWhereUniqueInput
  ): Promise<Refund | null> {
    const result = await this.service.refund({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        id: true,

        payment: {
          select: {
            id: true,
          },
        },

        reason: true,
        refundDate: true,
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
  @swagger.ApiOkResponse({ type: Refund })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRefund(
    @common.Param() params: RefundWhereUniqueInput,
    @common.Body() data: RefundUpdateInput
  ): Promise<Refund | null> {
    try {
      return await this.service.updateRefund({
        where: params,
        data: {
          ...data,

          payment: data.payment
            ? {
                connect: data.payment,
              }
            : undefined,
        },
        select: {
          amount: true,
          createdAt: true,
          id: true,

          payment: {
            select: {
              id: true,
            },
          },

          reason: true,
          refundDate: true,
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
  @swagger.ApiOkResponse({ type: Refund })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRefund(
    @common.Param() params: RefundWhereUniqueInput
  ): Promise<Refund | null> {
    try {
      return await this.service.deleteRefund({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          id: true,

          payment: {
            select: {
              id: true,
            },
          },

          reason: true,
          refundDate: true,
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
}