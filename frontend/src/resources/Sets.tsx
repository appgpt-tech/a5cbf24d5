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
const SetsTitle = () => {
  const record = useRecordContext();
  return <span>Sets {record ? `"${ record.id }"` : ""}</span>;
};

export const SetsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="" />
<TextField source="" />
<TextField source="" />
<TextField source="" />
<TextField source="" />
<TextField source="" />
<TextField source="" />
<TextField source="" />
<TextField source="" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const SetsEdit = () => (
                    <Edit title={<SetsTitle />}>
                      <SimpleForm>
                          <TextInput source=""   />
<TextInput source=""   />
<TextInput source=""   />
<TextInput source=""   />
<TextInput source=""   />
<TextInput source=""   />
<TextInput source=""   />
<TextInput source=""   />
<TextInput source=""   />
                      </SimpleForm>
                    </Edit>
                  );

export const SetsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source=""   />
<TextInput source=""   />
<TextInput source=""   />
<TextInput source=""   />
<TextInput source=""   />
<TextInput source=""   />
<TextInput source=""   />
<TextInput source=""   />
<TextInput source=""   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
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


