import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EmailCampaignCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <div />
        <DateTimeInput label="sentDate" source="sentDate" />
        <TextInput label="subject" source="subject" />
      </SimpleForm>
    </Create>
  );
};
