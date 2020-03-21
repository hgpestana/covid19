import React, {Component, ReactElement, JSXElementConstructor} from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native-elements';

class ContactsView extends Component<any, any> {
  render(): ReactElement<JSXElementConstructor<any>> {
    return (
      <SafeAreaView>
        <Text>Contactos</Text>
      </SafeAreaView>
    );
  }
}

export default ContactsView;
