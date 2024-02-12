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
const DiscountsTitle = () => {
  const record = useRecordContext();
  return <span>Discounts {record ? `"${ record.product }"` : ""}</span>;
};

export const DiscountsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <ReferenceField source="product" reference="Products"  />
<TextField source="discountType" />

<NumberField source="discountAmount" />
<NumberField source="discountPercent" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const DiscountsEdit = () => (
                    <Edit title={<DiscountsTitle />}>
                      <SimpleForm>
                          <ReferenceInput source="product"  reference="Products"   />
<TextInput source="discountType"   />
<TextInput source="description"   />
<NumberInput source="discountAmount"   />
<NumberInput source="discountPercent"   />
                      </SimpleForm>
                    </Edit>
                  );

export const DiscountsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <ReferenceInput source="product"  reference="Products"   />
<TextInput source="discountType"   />
<TextInput source="description"   />
<NumberInput source="discountAmount"   />
<NumberInput source="discountPercent"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
<ReferenceInput source="product" label="product" reference="Products"   alwaysOn/>,
,
,
,
,

    ];


