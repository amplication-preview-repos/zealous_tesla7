import { UserRole as TUserRole } from "../api/userRole/UserRole";

export const USERROLE_TITLE_FIELD = "roleName";

export const UserRoleTitle = (record: TUserRole): string => {
  return record.roleName?.toString() || String(record.id);
};
