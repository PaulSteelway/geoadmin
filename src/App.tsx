import * as React from "react";
import { PostList, PostShow, PostCreate, PostEdit } from "./posts";
import { Admin, Resource } from "react-admin";
import { RegionList, RegionShow, RegionCreate, RegionEdit } from "./regions";


import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
  RAFirebaseOptions
} from "react-admin-firebase";


import { firebaseConfig } from './FIREBASE_CONFIG';
import { LangCreate, LangEdit,LangList,LangShow } from "./langs";
import { StateList,StateCreate,StateEdit,StateShow } from './states';

const options: RAFirebaseOptions = {
  logging: true,
  rootRef: "",
 
};
export const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const authProvider = FirebaseAuthProvider(firebaseConfig, options);


class App extends React.Component {
  render() {
    return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource
          name="langs"
          list={LangList}
          show={LangShow}
          create={LangCreate}
          edit={LangEdit}
        />
        <Resource
          name="regions"
          list={RegionList}
          show={RegionShow}
          create={RegionCreate}
          edit={RegionEdit}
        />
        <Resource
          name="states"
          list={StateList}
          show={StateShow}
          create={StateCreate}
          edit={StateEdit}
        />
      </Admin>
    );
  }
}

export default App;
