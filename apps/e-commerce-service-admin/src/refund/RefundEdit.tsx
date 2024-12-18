import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { PaymentTitle } from "../payment/PaymentTitle";

export const RefundEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="payment.id" reference="Payment" label="payment">
          <SelectInput optionText={PaymentTitle} />
        </ReferenceInput>
        <TextInput label="reason" multiline source="reason" />
        <DateTimeInput label="refundDate" source="refundDate" />
      </SimpleForm>
    </Edit>
  );
};
