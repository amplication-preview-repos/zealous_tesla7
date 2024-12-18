import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const UserRoleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="roleDescription" multiline source="roleDescription" />
        <TextInput label="roleName" source="roleName" />
      </SimpleForm>
    </Create>
  );
};
