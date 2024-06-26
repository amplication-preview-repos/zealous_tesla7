import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContentManagementService } from "./contentManagement.service";
import { ContentManagementControllerBase } from "./base/contentManagement.controller.base";

@swagger.ApiTags("contentManagements")
@common.Controller("contentManagements")
export class ContentManagementController extends ContentManagementControllerBase {
  constructor(protected readonly service: ContentManagementService) {
    super(service);
  }
}
