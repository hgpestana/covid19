import React, {FunctionComponent} from 'react';
import {ScrollView, TextStyle} from 'react-native';
import {CONTACT_COLOR_SECONDARY, SECONDARY_COLOR, SECONDARY_TEXT_COLOR} from '../../../constants/';
import {Text} from 'react-native-elements';
import ContactCard from '../../atoms/ContactCard';
import {Contact, StoreProps} from '../../../types/';
import {storeWrapper} from '../../../storeWrapper';

const ContactsView: FunctionComponent<StoreProps> = (props) => {
  const contactTextTitle: TextStyle = {
    fontFamily: 'Roboto-Bold',
    color: SECONDARY_COLOR,
    textTransform: 'uppercase',
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 30,
    marginBottom: 10,
  };
  const contactTextDescription: TextStyle = {
    fontFamily: 'Roboto-Regular',
    textTransform: 'uppercase',
    fontSize: 15,
    marginHorizontal: 10,
    marginBottom: 15,
  };
  const _generateContactCards = (): Array<JSX.Element> => {
    return props.contacts.map((contact: Contact, index: number) => {
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

  return (
    <ScrollView>
      <Text style={contactTextTitle}>Teve contacto com COVID-19?</Text>
      <Text style={contactTextDescription}>Se tiver tosse, febre ou dificuldade respiratória, ligue:</Text>
      {_generateContactCards()}
    </ScrollView>
  );
};

export default storeWrapper(ContactsView);
