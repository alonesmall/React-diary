import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './layout/App';
import DetailApp from './layout/DetailApp';
import * as serviceWorker from './serviceWorker';
import store from '@/store';
import { Provider } from 'react-redux';

  ReactDOM.render(
    <Provider store = { store }>
      <BrowserRouter>
        <Switch>
          <Route path = '/detail' component = { DetailApp }></Route>
          <Route path = '/' component = { App }></Route>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
