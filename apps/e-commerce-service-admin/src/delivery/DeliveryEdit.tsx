import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { ShippingTitle } from "../shipping/ShippingTitle";

export const DeliveryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
