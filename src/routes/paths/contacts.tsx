import {MENU} from '../../constants';
import {Route} from '../types/routes';
import {CONTACT_COLOR, CONTACT_COLOR_SECONDARY} from '../../constants/colors';

export enum ContactsPaths {
  CONTACTS = 'contacts',
}

export const contactsPaths: Array<Route> = [
  {
    key: ContactsPaths.CONTACTS,
    path: '/contacts',
    name: 'Contatos',
    icon: 'phone',
    barColor: CONTACT_COLOR,
    pressColor: CONTACT_COLOR_SECONDARY,
    section: MENU,
  },
];
