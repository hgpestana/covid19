import React, {Component, JSXElementConstructor, ReactElement} from 'react';
import NewsView from './news-view';

class NewsContainer extends Component<any, any> {
  render(): ReactElement<JSXElementConstructor<any>> {
    return <NewsView/>;
  }
}

export default NewsContainer;
