import React, {Component, ReactElement} from 'react';
import {NativeRouter} from 'react-router-native';
import {Route, Switch} from 'react-router';
import {generateRoute, paths} from './paths';
import {Bulletin, Contacts, Information, Statistics} from '../components/pages';
import {InformationPaths} from './paths/information';
import {BulletinPaths} from './paths/bulletin';
import {StatisticsPaths} from './paths/statistics';
import {ContactsPaths} from './paths/contacts';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Navigation from '../components/organisms/Navigation';
import {WorldPaths} from './paths/world';
import {World} from '../components/pages/world';

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flex: 1,
    alignContent: 'stretch',
    justifyContent: 'center',
  },
});

class Router extends Component<{}, {}> {
  public render(): ReactElement<JSX.Element> {
    return (
      <SafeAreaView style={styles.view}>
        <NativeRouter>
          <Switch>
            <Route
              exact
              path={generateRoute(InformationPaths.INFORMATION)}
              component={Information}
            />
            <Route exact path={generateRoute(BulletinPaths.BULLETIN)} component={Bulletin}/>
            <Route
              exact
              path={generateRoute(StatisticsPaths.STATISTICS)}
              component={Statistics}
            />
            <Route
              exact
              path={generateRoute(WorldPaths.WORLD)}
              component={World}
            />
            <Route
              exact
              path={generateRoute(ContactsPaths.CONTACTS)}
              component={Contacts}
            />
          </Switch>
          <View>
            <Navigation active={'information'} routes={paths}/>
          </View>
        </NativeRouter>
      </SafeAreaView>
    );
  }
}

export default Router;
