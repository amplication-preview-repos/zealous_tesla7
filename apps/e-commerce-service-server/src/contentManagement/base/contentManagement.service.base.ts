/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ContentManagement as PrismaContentManagement,
} from "@prisma/client";

export class ContentManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ContentManagementCountArgs, "select">
  ): Promise<number> {
    return this.prisma.contentManagement.count(args);
  }

  async contentManagements(
    args: Prisma.ContentManagementFindManyArgs
  ): Promise<PrismaContentManagement[]> {
    return this.prisma.contentManagement.findMany(args);
  }
  async contentManagement(
    args: Prisma.ContentManagementFindUniqueArgs
  ): Promise<PrismaContentManagement | null> {
    return this.prisma.contentManagement.findUnique(args);
  }
  async createContentManagement(
    args: Prisma.ContentManagementCreateArgs
  ): Promise<PrismaContentManagement> {
    return this.prisma.contentManagement.create(args);
  }
  async updateContentManagement(
    args: Prisma.ContentManagementUpdateArgs
  ): Promise<PrismaContentManagement> {
    return this.prisma.contentManagement.update(args);
  }
  async deleteContentManagement(
    args: Prisma.ContentManagementDeleteArgs
  ): Promise<PrismaContentManagement> {
    return this.prisma.contentManagement.delete(args);
  }
}