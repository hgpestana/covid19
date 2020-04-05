import {Route} from '../../routes/types/routes';
import React, {Component, ReactElement} from 'react';
import BottomNavigation, {ShiftingTab, TabConfig} from 'react-native-material-bottom-navigation';
import {Icon} from 'react-native-elements';
import {generateLink} from '../../routes/paths';
import {RouteComponentProps, withRouter} from 'react-router';

export type TabProperties = {
  icon: string;
  label: string;
  url: string;
} & TabConfig

export type Properties = {
  tab: TabProperties;
  isActive: boolean;
}

export type NavigationState = {
  active: number | string;
  tabs: Array<TabProperties>;
}

export type NavigationProps = {
  active: string;
  routes: Array<Route>;
} & RouteComponentProps

class Navigation extends Component<NavigationProps, NavigationState> {
  public constructor(props: NavigationProps) {
    super(props);
    this.state = {
      tabs: this._generateTabs(props.routes),
      active: this.props.active,
    };
  }

  public render(): ReactElement<JSX.Element> {
    return (
      <BottomNavigation
        activeTab={this.state.active}
        tabs={this.state.tabs}
        renderTab={this._renderTab}
        onTabPress={this._onTabPress}
      />
    );
  }

  private _renderIcon = (icon: string) => (): JSX.Element => {
    return <Icon size={24} color={'white'} name={icon}/>;
  };

  private _renderTab = (properties: Properties): JSX.Element => {
    return <ShiftingTab
      isActive={properties.isActive}
      key={properties.tab.key}
      label={properties.tab.label}
      renderIcon={this._renderIcon(properties.tab.icon)}
    />;
  };

  private _generateTabs = (routes: Array<Route>): Array<TabProperties> => {
    return routes.map((route: Route): TabProperties => {
      return {
        key: route.key,
        icon: route.icon,
        label: route.name,
        barColor: route.barColor,
        pressColor: route.pressColor,
        url: generateLink(route.key),
      } as TabProperties;
    });
  };

  private _onTabPress = (newTab: TabProperties | TabConfig, _oldTab: TabProperties | TabConfig): void => {
    this.setState({
      active: newTab.key,
    });
    this.props.history.push( 'url' in newTab ? newTab.url : '');
  }
}

export default withRouter(Navigation);
