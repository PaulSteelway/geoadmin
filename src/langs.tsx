// in src/Langs.js
import * as React from "react";
import { PostList, PostShow, PostCreate, PostEdit } from "./posts";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  // DisabledInput,
  TabbedShowLayout,
  Tab,
  Resource,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteWithConfirmButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  FileField,
  FileInput,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

const LangFilter = (props: any) => {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="title" alwaysOn />
    </Filter>
  );
};

export const LangList = (props: any) => (
  <List {...props} filters={<LangFilter />}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="desc" label="Description" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteWithConfirmButton
        confirmContent="You will not be able to recover this record. Are you sure?"
        confirmTitle="Delete"
      />
    </Datagrid>
  </List>
);

export const LangShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="desc" label="Description" />
    </SimpleShowLayout>
  </Show>
);

export const LangCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="desc" label="Description" />
    </SimpleForm>
  </Create>
);

export const LangEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      {/* <DisabledInput source="id" /> */}
      <TextInput source="name" />
      <TextInput source="desc" label="Description" />
    </SimpleForm>
  </Edit>
);
