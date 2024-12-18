import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FilterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="criteria" source="criteria" />
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
