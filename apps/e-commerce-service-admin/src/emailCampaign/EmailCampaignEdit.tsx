import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EmailCampaignEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <div />
        <DateTimeInput label="sentDate" source="sentDate" />
        <TextInput label="subject" source="subject" />
      </SimpleForm>
    </Edit>
  );
};
