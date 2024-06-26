import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SiteSettingsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="settingName" source="settingName" />
        <div />
      </SimpleForm>
    </Create>
  );
};
