// Source code generated by AppGPT (www.appgpt.tech)

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
import { Grid } from '@mui/material';
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
const authorsTitle = () => {
  const record = useRecordContext();
  return <span>authors {record ? `"${ record.name }"` : ""}</span>;
};

export const authorsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="name" />
<DateField source="birthdate" />
<TextField source="nationality" />
<ReferenceField source="books" reference="books"  /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const authorsEdit = () => (
                    <Edit title={<authorsTitle />}>
                      <SimpleForm>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                          <Grid item xs={4}>
<TextInput source="name"   /></Grid>
<Grid item xs={4}>
<DateInput source="birthdate"   /></Grid>
<Grid item xs={4}>
<TextInput source="nationality"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="books"  reference="books"   /></Grid>
                        </Grid>
                      </SimpleForm>
                    </Edit>
                  );

export const authorsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                                        <Grid item xs={4}>
<TextInput source="name"   /></Grid>
<Grid item xs={4}>
<DateInput source="birthdate"   /></Grid>
<Grid item xs={4}>
<TextInput source="nationality"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="books"  reference="books"   /></Grid>
                                      </Grid>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,
<ReferenceInput source="books" label="books" reference="books"   alwaysOn/>,

    ];


