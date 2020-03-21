import React, {Component} from 'react';
import {NativeRouter} from 'react-router-native';
import {Route, Switch} from 'react-router';
import {generateRoute} from './paths';
import {
  Contacts,
  Information,
  News,
  Splash,
  Statistics,
} from '../components/pages';
import {
  PATH_CONTACTS,
  PATH_INFORMATION,
  PATH_NEWS,
  PATH_SPLASH,
  PATH_STATISTICS,
} from '../constants';

class Router extends Component<any, any> {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path={generateRoute(PATH_SPLASH)} component={Splash} />
          <Route
            exact
            path={generateRoute(PATH_INFORMATION)}
            component={Information}
          />
          <Route exact path={generateRoute(PATH_NEWS)} component={News} />
          <Route
            exact
            path={generateRoute(PATH_STATISTICS)}
            component={Statistics}
          />
          <Route
            exact
            path={generateRoute(PATH_CONTACTS)}
            component={Contacts}
          />
        </Switch>
      </NativeRouter>
    );
  }
}

export default Router;
