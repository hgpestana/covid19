import React, {Component, ReactElement} from 'react';
import ContactsView from './contacts-view';
import {ContactState} from '../../../types/contact';

class ContactsContainer extends Component<{}, ContactState> {
  public state: Readonly<ContactState> = {
    contacts: [
      {
        label: 'SNS 24',
        description: 'Linha de saúde nacional',
        phone: '+351 800 24 24 24',
      },
      {
        label: 'SNS 24 Madeira',
        description: 'Linha de saúde para R.A.M.',
        phone: '+351 800 24 24 20',
      },
      {
        label: 'SNS 24 Açores',
        description: 'Linha de saúde para R.A.A.',
        phone: '+351 800 24 60 24',
      },
      {
        label: 'Informações Açores',
        description: 'Outras dúvidas na R.A.A.',
        phone: '+351 800 29 29 29',
      },
    ],
  };

  public render(): ReactElement<JSX.Element> {
    return <ContactsView {...this.state}/>;
  }
}

export default ContactsContainer;
