import { Module } from "@nestjs/common";
import { HelpDeskModuleBase } from "./base/helpDesk.module.base";
import { HelpDeskService } from "./helpDesk.service";
import { HelpDeskController } from "./helpDesk.controller";
import { HelpDeskResolver } from "./helpDesk.resolver";

@Module({
  imports: [HelpDeskModuleBase],
  controllers: [HelpDeskController],
  providers: [HelpDeskService, HelpDeskResolver],
  exports: [HelpDeskService],
})
export class HelpDeskModule {}
