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
const WishlistTitle = () => {
  const record = useRecordContext();
  return <span>Wishlist {record ? `"${ record.insertedDate }"` : ""}</span>;
};

export const WishlistList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <ReferenceField source="userName" reference="users"  />
<ReferenceField source="cardName" reference="cards"  />
<DateField source="insertedDate" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const WishlistEdit = () => (
                    <Edit title={<WishlistTitle />}>
                      <SimpleForm>
                          <ReferenceInput source="userName"  reference="users"   />
<ReferenceInput source="cardName"  reference="cards"   />
<DateInput source="insertedDate"   />
                      </SimpleForm>
                    </Edit>
                  );

export const WishlistCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <ReferenceInput source="userName"  reference="users"   />
<ReferenceInput source="cardName"  reference="cards"   />
<DateInput source="insertedDate"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
<ReferenceInput source="userName" label="userName" reference="users"   alwaysOn/>,
<ReferenceInput source="cardName" label="cardName" reference="cards"   alwaysOn/>,
,

    ];


