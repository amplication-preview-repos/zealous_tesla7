import { Module } from "@nestjs/common";
import { ContentManagementModuleBase } from "./base/contentManagement.module.base";
import { ContentManagementService } from "./contentManagement.service";
import { ContentManagementController } from "./contentManagement.controller";
import { ContentManagementResolver } from "./contentManagement.resolver";

@Module({
  imports: [ContentManagementModuleBase],
  controllers: [ContentManagementController],
  providers: [ContentManagementService, ContentManagementResolver],
  exports: [ContentManagementService],
})
export class ContentManagementModule {}
