// in src/States.js
import * as React from "react";

// import { PostList, PostShow, PostCreate, PostEdit } from "./posts";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  // DisabledInput,
  TranslatableInputs,
  TabbedShowLayout,
  Tab,
  Resource,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  ReferenceField,
  SelectInput,
  ImageInput,
  ImageField,
  ReferenceInput,
  TranslatableFields,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import { useLoc } from "./hooks";

function s(props: any) {
  console.log(props);
}

const StateFilter = (props: any) => {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="title" alwaysOn />
    </Filter>
  );
};

export const StateList = (props: any) => (
  <List {...props} filters={<StateFilter />}>
    <Datagrid>
      <TextField source="name.en" label="Name" />
      <ReferenceField source="region_id" reference="regions">
        <TextField source="name.en" />
      </ReferenceField>
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" />
    </Datagrid>
  </List>
);

export const StateShow = (props: any) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="name">
        <ReferenceField source="region_id" reference="regions">
          <TextField source="name.en" />
        </ReferenceField>
        <TranslatableFields locales={useLoc()} default="en">
          <TextField source="name" />
          <TextField source="fullname" />
        </TranslatableFields>
      </Tab>
      <Tab label="details" path="state">
      <TranslatableFields locales={useLoc()} default="en">
          <TextField source="capital" />
          <TextField source="religion" />
          <TextField source="language" />
          <TextField source="currency" />
        </TranslatableFields>
        <TextField source="population" />
        <TextField source="area" />
        <ImageField source="flag.src" title="title" />
        <ImageField source="coat.src" title="title" />
        <ImageField source="map.src" title="title" />

      </Tab>
    </TabbedShowLayout>
  </Show>
);

export const StateCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="Region" source="region_id" reference="regions">
        <SelectInput source="name" optionText="name.en" />
      </ReferenceInput>
      <TranslatableInputs locales={useLoc()} defaultLocale="en">
        <TextInput source="name" />
        <TextInput source="fullname" />
        <TextInput source="capital" />
        <TextInput source="religion" />
        <TextInput source="language" />
        <TextInput source="currency" />
      </TranslatableInputs>
      <TextInput source="population" />
      <TextInput source="area" />
      <ImageInput source="flag" label="Flag" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <ImageInput source="coat" label="Coat" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <ImageInput source="map" label="Find on map" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export const StateEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput label="Region" source="region_id" reference="regions">
        <SelectInput source="name" optionText="name.en" />
      </ReferenceInput>
      {/* <DisabledInput source="id" /> */}
      <TranslatableInputs locales={useLoc()} defaultLocale="en">
        <TextInput source="name" />
        <TextInput source="fullname" />
        <TextInput source="capital" />
        <TextInput source="religion" />
        <TextInput source="language" />
        <TextInput source="currency" />
      </TranslatableInputs>
      <TextInput source="population" />
      <TextInput source="area" />
      <ImageInput source="flag" label="Flag" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <ImageInput source="coat" label="Coat" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <ImageInput source="map" label="Find on map" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      
    </SimpleForm>
  </Edit>
);
