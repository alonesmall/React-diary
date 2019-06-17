import React from 'react';
import Detail from '../views/Detail';
import { Switch, Route } from 'react-router-dom';
function DetailApp () {
  return (
    <Switch>
      <Route path = '/detail/:id' component = { Detail }></Route>
    </Switch>
  )
}

export default DetailApp;