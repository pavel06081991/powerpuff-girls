import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Page } from '../../components/Page';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Content } from '../../components/Content';
import { Show } from '../../containers/Show';
import { ShowList } from '../../containers/ShowList';
import { Episode } from '../../containers/Episode';

export class ShowPage extends PureComponent {
  render() {
    return (
      <Page>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/show" component={ShowList} />
            <Route exact path="/show/:showId" component={Show} />
            <Route exact path="/show/:showId/:seasonId/:episodeId" component={Episode} />
          </Switch>
        </Content>
        <Footer />
      </Page>
    );
  }
}
