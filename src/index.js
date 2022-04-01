import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import stores from 'redux/store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stores.store}>
      <PersistGate loading={'Loading...'} persistor={stores.persistor}>
        <BrowserRouter basename="/goit-react-hw-06-phonebook/">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root')
);
