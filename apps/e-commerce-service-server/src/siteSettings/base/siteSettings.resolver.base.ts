/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { SiteSettings } from "./SiteSettings";
import { SiteSettingsCountArgs } from "./SiteSettingsCountArgs";
import { SiteSettingsFindManyArgs } from "./SiteSettingsFindManyArgs";
import { SiteSettingsFindUniqueArgs } from "./SiteSettingsFindUniqueArgs";
import { CreateSiteSettingsArgs } from "./CreateSiteSettingsArgs";
import { UpdateSiteSettingsArgs } from "./UpdateSiteSettingsArgs";
import { DeleteSiteSettingsArgs } from "./DeleteSiteSettingsArgs";
import { SiteSettingsService } from "../siteSettings.service";
@graphql.Resolver(() => SiteSettings)
export class SiteSettingsResolverBase {
  constructor(protected readonly service: SiteSettingsService) {}

  async _siteSettingsItemsMeta(
    @graphql.Args() args: SiteSettingsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SiteSettings])
  async siteSettingsItems(
    @graphql.Args() args: SiteSettingsFindManyArgs
  ): Promise<SiteSettings[]> {
    return this.service.siteSettingsItems(args);
  }

  @graphql.Query(() => SiteSettings, { nullable: true })
  async siteSettings(
    @graphql.Args() args: SiteSettingsFindUniqueArgs
  ): Promise<SiteSettings | null> {
    const result = await this.service.siteSettings(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SiteSettings)
  async createSiteSettings(
    @graphql.Args() args: CreateSiteSettingsArgs
  ): Promise<SiteSettings> {
    return await this.service.createSiteSettings({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SiteSettings)
  async updateSiteSettings(
    @graphql.Args() args: UpdateSiteSettingsArgs
  ): Promise<SiteSettings | null> {
    try {
      return await this.service.updateSiteSettings({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SiteSettings)
  async deleteSiteSettings(
    @graphql.Args() args: DeleteSiteSettingsArgs
  ): Promise<SiteSettings | null> {
    try {
      return await this.service.deleteSiteSettings(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}