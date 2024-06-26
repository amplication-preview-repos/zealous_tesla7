import { Module } from "@nestjs/common";
import { FilterModuleBase } from "./base/filter.module.base";
import { FilterService } from "./filter.service";
import { FilterController } from "./filter.controller";
import { FilterResolver } from "./filter.resolver";

@Module({
  imports: [FilterModuleBase],
  controllers: [FilterController],
  providers: [FilterService, FilterResolver],
  exports: [FilterService],
})
export class FilterModule {}
