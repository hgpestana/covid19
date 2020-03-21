import React, {Component, JSXElementConstructor, ReactElement} from 'react';
import StatisticsView from './statistics-view';

class StatisticsContainer extends Component<any, any> {
  render(): ReactElement<JSXElementConstructor<any>> {
    return <StatisticsView/>;
  }
}

export default StatisticsContainer;
