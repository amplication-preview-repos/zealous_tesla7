import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { ShippingTitle } from "../shipping/ShippingTitle";

export const DeliveryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="deliveryAddress" multiline source="deliveryAddress" />
        <DateTimeInput label="deliveryDate" source="deliveryDate" />
        <SelectInput
          source="deliveryStatus"
          label="deliveryStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="shipping.id"
          reference="Shipping"
          label="shipping"
        >
          <SelectInput optionText={ShippingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
