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
const SupportTicketsTitle = () => {
  const record = useRecordContext();
  return <span>SupportTickets {record ? `"${ record.id }"` : ""}</span>;
};

export const SupportTicketsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <ReferenceField source="userId" reference="users"  />
<ReferenceField source="customerId" reference="customers"  />

<TextField source="status" />
<DateField source="creationDate" />
<DateField source="resolutionDate" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const SupportTicketsEdit = () => (
                    <Edit title={<SupportTicketsTitle />}>
                      <SimpleForm>
                          <ReferenceInput source="userId"  reference="users"   />
<ReferenceInput source="customerId"  reference="customers"   />
<TextInput source="description"   />
<TextInput source="status"   />
<DateInput source="creationDate"   />
<DateInput source="resolutionDate"   />
                      </SimpleForm>
                    </Edit>
                  );

export const SupportTicketsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <ReferenceInput source="userId"  reference="users"   />
<ReferenceInput source="customerId"  reference="customers"   />
<TextInput source="description"   />
<TextInput source="status"   />
<DateInput source="creationDate"   />
<DateInput source="resolutionDate"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="userId" label="userId" reference="users"   alwaysOn/>,
<ReferenceInput source="customerId" label="customerId" reference="customers"   alwaysOn/>,
,
,
,

    ];


