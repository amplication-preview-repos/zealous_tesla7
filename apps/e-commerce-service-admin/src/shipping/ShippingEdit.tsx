import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { DeliveryTitle } from "../delivery/DeliveryTitle";
import { OrderTitle } from "../order/OrderTitle";

export const ShippingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="deliveries"
          reference="Delivery"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeliveryTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="order.id" reference="Order" label="order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput label="shippingCost" source="shippingCost" />
        <DateTimeInput label="shippingDate" source="shippingDate" />
        <SelectInput
          source="shippingMethod"
          label="shippingMethod"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="trackingNumber" source="trackingNumber" />
      </SimpleForm>
    </Edit>
  );
};
