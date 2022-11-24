// in src/Regions.js
import * as React from 'react';


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
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  FileField,
  FileInput,
  TranslatableFields,
  useTranslatableContext
} from "react-admin";
import {RichTextInput} from "ra-input-rich-text";
import { useLoc } from './hooks';
import { StateList,StateCreate,StateEdit,StateShow } from './states';



const RegionFilter = (props: any) => {
  return (<Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>);
};

export const RegionList = (props: any) => (
  <List {...props} filters={<RegionFilter />}>
    <Datagrid>
      <TextField source="name.en" label="Name" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" />
    </Datagrid>
  </List>
);

export const RegionShow = (props: any) => (
  <Show {...props}>
    <TabbedShowLayout>
            <Tab label="name">
            <TranslatableFields locales={useLoc()} default="en">
    <TextField source="name"/>
</TranslatableFields>
            
            </Tab>
            <Tab label="states" path="state">
            <Resource
          name="states"
          list={StateList}
          show={StateShow}
          create={StateCreate}
          edit={StateEdit}
        />
            </Tab>
            
        </TabbedShowLayout>

  </Show>
);

export const RegionCreate = (props: any) => (
  
  <Create {...props}>
    <SimpleForm>
    <TranslatableInputs  locales={useLoc()}  defaultLocale="en">
    <TextInput source="name" />
    
</TranslatableInputs>
    
      
    </SimpleForm>
  </Create>
);

export const RegionEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      {/* <DisabledInput source="id" /> */}
      <TranslatableInputs  locales={useLoc()}  defaultLocale="en">
    <TextInput source="name" />
    
</TranslatableInputs>
    </SimpleForm>
  </Edit>
);
