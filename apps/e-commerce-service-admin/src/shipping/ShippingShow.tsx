import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SHIPPING_TITLE_FIELD } from "./ShippingTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const ShippingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="order" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="shippingCost" source="shippingCost" />
        <TextField label="shippingDate" source="shippingDate" />
        <TextField label="shippingMethod" source="shippingMethod" />
        <TextField label="trackingNumber" source="trackingNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Delivery"
          target="shippingId"
          label="Deliveries"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
