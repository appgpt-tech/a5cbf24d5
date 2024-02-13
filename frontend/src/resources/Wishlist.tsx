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
const WishlistTitle = () => {
  const record = useRecordContext();
  return <span>Wishlist {record ? `"${ record.user }"` : ""}</span>;
};

export const WishlistList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <ReferenceField source="user" reference="Users"  />
<ReferenceField source="card" reference="Cards"  />
<DateField source="dateInserted" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const WishlistEdit = () => (
                    <Edit title={<WishlistTitle />}>
                      <SimpleForm>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                          <Grid item xs={4}>
<ReferenceInput source="user"  reference="Users"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="card"  reference="Cards"   /></Grid>
<Grid item xs={4}>
<DateInput source="dateInserted"   /></Grid>
                        </Grid>
                      </SimpleForm>
                    </Edit>
                  );

export const WishlistCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                                        <Grid item xs={4}>
<ReferenceInput source="user"  reference="Users"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="card"  reference="Cards"   /></Grid>
<Grid item xs={4}>
<DateInput source="dateInserted"   /></Grid>
                                      </Grid>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
<ReferenceInput source="user" label="user" reference="Users"   alwaysOn/>,
<ReferenceInput source="card" label="card" reference="Cards"   alwaysOn/>,
,

    ];


