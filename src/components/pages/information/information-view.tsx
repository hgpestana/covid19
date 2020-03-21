import React, {Component, JSXElementConstructor, ReactElement} from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native-elements';

class InformationView extends Component<any, any> {
  render(): ReactElement<JSXElementConstructor<any>> {
    return (
      <SafeAreaView>
        <Text>informações</Text>
      </SafeAreaView>
    );
  }
}

export default InformationView;
