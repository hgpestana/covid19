import React, {Component, JSXElementConstructor, ReactElement} from 'react';
import InformationView from './information-view';

class InformationContainer extends Component<any, any> {
  render(): ReactElement<JSXElementConstructor<any>> {
    return <InformationView/>;
  }
}

export default InformationContainer;
