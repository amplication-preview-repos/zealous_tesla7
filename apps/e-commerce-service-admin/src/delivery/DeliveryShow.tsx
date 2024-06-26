import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SHIPPING_TITLE_FIELD } from "../shipping/ShippingTitle";

export const DeliveryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="deliveryAddress" source="deliveryAddress" />
        <TextField label="deliveryDate" source="deliveryDate" />
        <TextField label="deliveryStatus" source="deliveryStatus" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="shipping"
          source="shipping.id"
          reference="Shipping"
        >
          <TextField source={SHIPPING_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
