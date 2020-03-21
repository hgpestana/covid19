import React, {Component, JSXElementConstructor, ReactElement} from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native-elements';

class NewsView extends Component<any, any> {
  render(): ReactElement<JSXElementConstructor<any>> {
    return (
      <SafeAreaView>
        <Text>Notícias</Text>
      </SafeAreaView>
    );
  }
}

export default NewsView;
