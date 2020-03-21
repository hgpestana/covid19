import React, {Component} from 'react';
import SplashView from './splash-view';
import {Redirect} from 'react-router';
import {generateLink} from '../../../routes/paths';
import {PATH_INFORMATION} from '../../../constants';

class SplashContainer extends Component<any, {startupFinished: boolean}> {
  state = {
    startupFinished: false,
  };

  componentDidMount(): void {
    setTimeout(() => this.setState({startupFinished: true}), 3000);
  }

  render(): React.ReactElement<any> {
    if (this.state.startupFinished) {
      return (
        <Redirect
          push={true}
          to={{
            pathname: generateLink(PATH_INFORMATION),
            state: {...this.state},
          }}
        />
      );
    }
    return <SplashView />;
  }
}

export default SplashContainer;
