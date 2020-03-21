import React, {Component, JSXElementConstructor, ReactElement} from 'react';
import ContactsView from './contacts-view';

class ContactsContainer extends Component<any, any> {
  render(): ReactElement<JSXElementConstructor<any>> {
    return <ContactsView />;
  }
}

export default ContactsContainer;
