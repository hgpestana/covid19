import {SET_CONTACTS} from '../constants';
import {Contact} from '../types';

export type SetContacts = {
  type: SET_CONTACTS;
  contacts: Array<Contact>;
};

const setContacts = (contacts: Array<Contact>): SetContacts => {
  return {
    type: SET_CONTACTS,
    contacts: contacts,
  };
};

export default setContacts;
