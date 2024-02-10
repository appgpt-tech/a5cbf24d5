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
const UsersTitle = () => {
  const record = useRecordContext();
  return <span>Users {record ? `"${ record.userId }"` : ""}</span>;
};

export const UsersList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <NumberField source="userId" />
<EmailField source="email" />
<TextField source="name" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const UsersEdit = () => (
                    <Edit title={<UsersTitle />}>
                      <SimpleForm>
                          <NumberInput source="userId"   />
<TextInput source="email"   />
<TextInput source="name"   />
                      </SimpleForm>
                    </Edit>
                  );

export const UsersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <NumberInput source="userId"   />
<TextInput source="email"   />
<TextInput source="name"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,

    ];


