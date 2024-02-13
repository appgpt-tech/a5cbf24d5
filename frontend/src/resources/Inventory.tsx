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
const InventoryTitle = () => {
  const record = useRecordContext();
  return <span>Inventory {record ? `"${ record.user }"` : ""}</span>;
};

export const InventoryList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <ReferenceField source="user" reference="Users"  />
<ReferenceField source="card" reference="Cards"  />
<DateField source="dateAdded" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const InventoryEdit = () => (
                    <Edit title={<InventoryTitle />}>
                      <SimpleForm>
                          <ReferenceInput source="user"  reference="Users"   />
<ReferenceInput source="card"  reference="Cards"   />
<DateInput source="dateAdded"   />
                      </SimpleForm>
                    </Edit>
                  );

export const InventoryCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <ReferenceInput source="user"  reference="Users"   />
<ReferenceInput source="card"  reference="Cards"   />
<DateInput source="dateAdded"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
<ReferenceInput source="user" label="user" reference="Users"   alwaysOn/>,
<ReferenceInput source="card" label="card" reference="Cards"   alwaysOn/>,
,

    ];


