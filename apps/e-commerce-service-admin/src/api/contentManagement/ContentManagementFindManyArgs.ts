import { ContentManagementWhereInput } from "./ContentManagementWhereInput";
import { ContentManagementOrderByInput } from "./ContentManagementOrderByInput";

export type ContentManagementFindManyArgs = {
  where?: ContentManagementWhereInput;
  orderBy?: Array<ContentManagementOrderByInput>;
  skip?: number;
  take?: number;
};
