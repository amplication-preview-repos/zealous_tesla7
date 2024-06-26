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
import { SiteSettingsService } from "../siteSettings.service";
import { SiteSettingsCreateInput } from "./SiteSettingsCreateInput";
import { SiteSettings } from "./SiteSettings";
import { SiteSettingsFindManyArgs } from "./SiteSettingsFindManyArgs";
import { SiteSettingsWhereUniqueInput } from "./SiteSettingsWhereUniqueInput";
import { SiteSettingsUpdateInput } from "./SiteSettingsUpdateInput";

export class SiteSettingsControllerBase {
  constructor(protected readonly service: SiteSettingsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SiteSettings })
  async createSiteSettings(
    @common.Body() data: SiteSettingsCreateInput
  ): Promise<SiteSettings> {
    return await this.service.createSiteSettings({
      data: data,
      select: {
        createdAt: true,
        id: true,
        settingName: true,
        settingValue: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SiteSettings] })
  @ApiNestedQuery(SiteSettingsFindManyArgs)
  async siteSettingsItems(
    @common.Req() request: Request
  ): Promise<SiteSettings[]> {
    const args = plainToClass(SiteSettingsFindManyArgs, request.query);
    return this.service.siteSettingsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        settingName: true,
        settingValue: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SiteSettings })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async siteSettings(
    @common.Param() params: SiteSettingsWhereUniqueInput
  ): Promise<SiteSettings | null> {
    const result = await this.service.siteSettings({
      where: params,
      select: {
        createdAt: true,
        id: true,
        settingName: true,
        settingValue: true,
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
  @swagger.ApiOkResponse({ type: SiteSettings })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSiteSettings(
    @common.Param() params: SiteSettingsWhereUniqueInput,
    @common.Body() data: SiteSettingsUpdateInput
  ): Promise<SiteSettings | null> {
    try {
      return await this.service.updateSiteSettings({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          settingName: true,
          settingValue: true,
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
  @swagger.ApiOkResponse({ type: SiteSettings })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSiteSettings(
    @common.Param() params: SiteSettingsWhereUniqueInput
  ): Promise<SiteSettings | null> {
    try {
      return await this.service.deleteSiteSettings({
        where: params,
        select: {
          createdAt: true,
          id: true,
          settingName: true,
          settingValue: true,
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