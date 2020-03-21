import React, {Component, JSXElementConstructor, ReactElement} from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native-elements';

class StatisticsView extends Component<any, any> {
  render(): ReactElement<JSXElementConstructor<any>> {
    return (
      <SafeAreaView>
        <Text>Estatísticas</Text>
      </SafeAreaView>
    );
  }
}

export default StatisticsView;
