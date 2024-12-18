import { HelpDeskWhereInput } from "./HelpDeskWhereInput";
import { HelpDeskOrderByInput } from "./HelpDeskOrderByInput";

export type HelpDeskFindManyArgs = {
  where?: HelpDeskWhereInput;
  orderBy?: Array<HelpDeskOrderByInput>;
  skip?: number;
  take?: number;
};
