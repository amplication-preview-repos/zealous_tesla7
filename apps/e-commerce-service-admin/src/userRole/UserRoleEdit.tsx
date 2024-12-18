import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UserRoleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="roleDescription" multiline source="roleDescription" />
        <TextInput label="roleName" source="roleName" />
      </SimpleForm>
    </Edit>
  );
};
