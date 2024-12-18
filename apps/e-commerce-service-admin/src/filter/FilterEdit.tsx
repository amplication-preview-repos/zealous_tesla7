import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FilterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="criteria" source="criteria" />
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
