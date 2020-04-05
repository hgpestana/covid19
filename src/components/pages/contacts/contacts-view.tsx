import React, {Component, ReactElement} from 'react';
import {SafeAreaView, TextStyle} from 'react-native';
import {CONTACT_COLOR_SECONDARY, SECONDARY_COLOR, SECONDARY_TEXT_COLOR} from '../../../constants/colors';
import {Text} from 'react-native-elements';
import ContactCard from '../../atoms/ContactCard';
import {Contact, ContactViewProps} from '../../../types/contact';

class ContactsView extends Component <ContactViewProps> {
  private contactTextTitle: TextStyle = {
    fontFamily: 'Roboto-Bold',
    color: SECONDARY_COLOR,
    textTransform: 'uppercase',
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 30,
    marginBottom: 10,
  };
  private contactTextDescription: TextStyle = {
    fontFamily: 'Roboto-Regular',
    textTransform: 'uppercase',
    fontSize: 15,
    marginHorizontal: 10,
    marginBottom: 15,
  };

  public render(): ReactElement<JSX.Element> {
    return (
      <SafeAreaView>
        <Text style={this.contactTextTitle}>Teve contacto com COVID-19?</Text>
        <Text style={this.contactTextDescription}>Se tiver tosse, febre ou dificuldade respiratória, ligue:</Text>
        {this._generateContactCards()}
      </SafeAreaView>
    );
  }

  private _generateContactCards = (): Array<JSX.Element> => {
    return this.props.contacts.map((contact: Contact, index: number) => {
      return (
        <ContactCard
          key={index}
          title={contact.label}
          description={contact.description}
          phone={contact.phone}
          mobile={contact.mobile}
          email={contact.email}
          cardColor={CONTACT_COLOR_SECONDARY}
          textColor={SECONDARY_TEXT_COLOR}
        />
      );
    });
  };
}

export default ContactsView;
