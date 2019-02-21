import React, { PureComponent } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { ShowPage } from './show';

export const Pages = withRouter(class App extends PureComponent {
  render() {
    return (
      <Switch>
        <Redirect exact path="/" to="/show" />
        <Route path="/show" component={ShowPage} />
      </Switch>
    );
  }
});
