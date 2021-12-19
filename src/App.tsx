import React from 'react';
import './App.css';
import { RouterLinks } from './routerLinks/RouterLinks';
import { Provider } from 'react-redux'
import { store } from './reducersStore/store'

function App() {
  return (
    <div>
      <h1>React</h1>
      <br />
      <Provider store={store}>
        <RouterLinks />
      </Provider>
    </div>
  );
}

export default App;
