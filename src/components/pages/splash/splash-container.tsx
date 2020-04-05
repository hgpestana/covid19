/*global setTimeout*/
import React, {Component, ReactElement} from 'react';
import SplashView from './splash-view';
import {Router} from '../../../routes';

class SplashContainer extends Component<{}, {startupFinished: boolean}> {
  public state = {
    startupFinished: false,
  };

  public componentDidMount(): void {
    setTimeout(() => this.setState({startupFinished: true}), 3000);
  }

  public render(): ReactElement<JSX.Element> {
    if (this.state.startupFinished) {
      return <Router/>;
    }
    return <SplashView/>;
  }
}

export default SplashContainer;
