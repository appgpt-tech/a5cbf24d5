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
const CardsTitle = () => {
  const record = useRecordContext();
  return <span>Cards {record ? `"${ record.cardId }"` : ""}</span>;
};

export const CardsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <NumberField source="cardId" />
<ReferenceField source="setid" reference="Sets"  />
<TextField source="cardName" />
<TextField source="serial" />
<TextField source="type" />
<TextField source="rarity" />
<TextField source="condition" />
<UrlField source="imageurl" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const CardsEdit = () => (
                    <Edit title={<CardsTitle />}>
                      <SimpleForm>
                          <NumberInput source="cardId"   />
<ReferenceInput source="setid"  reference="Sets"   />
<TextInput source="cardName"   />
<TextInput source="serial"   />
<TextInput source="type"   />
<TextInput source="rarity"   />
<TextInput source="condition"   />
<TextInput source="imageurl"   />
                      </SimpleForm>
                    </Edit>
                  );

export const CardsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <NumberInput source="cardId"   />
<ReferenceInput source="setid"  reference="Sets"   />
<TextInput source="cardName"   />
<TextInput source="serial"   />
<TextInput source="type"   />
<TextInput source="rarity"   />
<TextInput source="condition"   />
<TextInput source="imageurl"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="setid" label="setid" reference="Sets"   alwaysOn/>,
,
,
,
,
,
,

    ];


