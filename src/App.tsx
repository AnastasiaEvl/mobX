import React from 'react';
import './App.css';
import Counter from "./components/counter";
import {Wrapper} from "./components/wrapper";
import {RootStoreContext} from "./hook/root-store-context";
import RootStore from "./stores/root-store";

function App() {
  return (
      <RootStoreContext.Provider value={new RootStore()}>
     <Wrapper/>
      </RootStoreContext.Provider>
  );
}

export default App;
