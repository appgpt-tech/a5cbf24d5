import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput
} from "react-admin";
import { useRecordContext } from "react-admin";
const ReadOnlyPasswordField = ({ record, source }) => {

  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword =  '********';

  return (
      <span>{maskedPassword}</span>
  );
};
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const OrdersTitle = () => {
  const record = useRecordContext();
  return <span>Orders {record ? `"${ record.id }"` : ""}</span>;
};

export const OrdersList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="orderNumber" />
<ReferenceField source="customer" reference="Customers"  />
<NumberField source="totalAmount" />
<NumberField source="vat" />
<NumberField source="totalAmountWithVat" />
<NumberField source="shippingCost" />
<TextField source="shippingAddress" />
<TextField source="orderAddress" />
<EmailField source="orderEmail" />
<DateField source="orderDate" />
<TextField source="orderStatus" />
<TextField source="trackingNo" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const OrdersEdit = () => (
                    <Edit title={<OrdersTitle />}>
                      <SimpleForm>
                          <TextInput source="orderNumber"   />
<ReferenceInput source="customer"  reference="Customers"   />
<NumberInput source="totalAmount"   />
<NumberInput source="vat"   />
<NumberInput source="totalAmountWithVat"   />
<NumberInput source="shippingCost"   />
<TextInput source="shippingAddress"   />
<TextInput source="orderAddress"   />
<TextInput source="orderEmail"   />
<DateInput source="orderDate"   />
<TextInput source="orderStatus"   />
<TextInput source="trackingNo"   />
                      </SimpleForm>
                    </Edit>
                  );

export const OrdersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="orderNumber"   />
<ReferenceInput source="customer"  reference="Customers"   />
<NumberInput source="totalAmount"   />
<NumberInput source="vat"   />
<NumberInput source="totalAmountWithVat"   />
<NumberInput source="shippingCost"   />
<TextInput source="shippingAddress"   />
<TextInput source="orderAddress"   />
<TextInput source="orderEmail"   />
<DateInput source="orderDate"   />
<TextInput source="orderStatus"   />
<TextInput source="trackingNo"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="customer" label="customer" reference="Customers"   alwaysOn/>,
,
,
,
,
,
,
,
,
,
,

    ];


