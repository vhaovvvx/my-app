import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRedux from './AppRedux';
import store from './store';
import AppCourse from './AppCourse';
import App from './App';

// import AppTest from "./AppTest";

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);
