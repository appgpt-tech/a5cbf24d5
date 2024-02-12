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
const ReviewsTitle = () => {
  const record = useRecordContext();
  return <span>Reviews {record ? `"${ record.product }"` : ""}</span>;
};

export const ReviewsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <ReferenceField source="product" reference="Products"  />
<ReferenceField source="customer" reference="Customers"  />
<ReferenceField source="vendor" reference="Vendors"  />
<NumberField source="rating" />

<DateField source="date" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ReviewsEdit = () => (
                    <Edit title={<ReviewsTitle />}>
                      <SimpleForm>
                          <ReferenceInput source="product"  reference="Products"   />
<ReferenceInput source="customer"  reference="Customers"   />
<ReferenceInput source="vendor"  reference="Vendors"   />
<NumberInput source="rating"   />
<TextInput source="reviewDetails"   />
<DateInput source="date"   />
                      </SimpleForm>
                    </Edit>
                  );

export const ReviewsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <ReferenceInput source="product"  reference="Products"   />
<ReferenceInput source="customer"  reference="Customers"   />
<ReferenceInput source="vendor"  reference="Vendors"   />
<NumberInput source="rating"   />
<TextInput source="reviewDetails"   />
<DateInput source="date"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
<ReferenceInput source="product" label="product" reference="Products"   alwaysOn/>,
<ReferenceInput source="customer" label="customer" reference="Customers"   alwaysOn/>,
<ReferenceInput source="vendor" label="vendor" reference="Vendors"   alwaysOn/>,
,
,
,

    ];


