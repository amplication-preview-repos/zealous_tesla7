import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SHIPPING_TITLE_FIELD } from "../shipping/ShippingTitle";

export const DeliveryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Deliveries"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
