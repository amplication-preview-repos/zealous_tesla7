import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HelpDeskService } from "./helpDesk.service";
import { HelpDeskControllerBase } from "./base/helpDesk.controller.base";

@swagger.ApiTags("helpDesks")
@common.Controller("helpDesks")
export class HelpDeskController extends HelpDeskControllerBase {
  constructor(protected readonly service: HelpDeskService) {
    super(service);
  }
}
