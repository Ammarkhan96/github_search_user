import React from 'react';
import './App.css';
import store from "./redux/store"
import Input from "./components/Input/Input"
import { Provider } from 'react-redux';
import List from "./components/List/List"
import Modal from './components/Modal/Modal';

function App() {
  return (
   <Provider store={store}>
      <div className='App'>
        <h1>Github User Search</h1>
        <Input />
        <List />
        <Modal />
      </div>
   </Provider>
  );
}

export default App;
