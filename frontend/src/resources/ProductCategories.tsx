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
const ProductCategoriesTitle = () => {
  const record = useRecordContext();
  return <span>ProductCategories {record ? `"${ record.description }"` : ""}</span>;
};

export const ProductCategoriesList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="description" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ProductCategoriesEdit = () => (
                    <Edit title={<ProductCategoriesTitle />}>
                      <SimpleForm>
                          <TextInput source="description"   />
                      </SimpleForm>
                    </Edit>
                  );

export const ProductCategoriesCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="description"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,

    ];


