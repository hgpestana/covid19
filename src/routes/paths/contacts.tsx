import {
  PATH_CONTACTS,
  ROUTE_BAR_COLOR,
  ROUTE_ICON,
  ROUTE_KEY,
  ROUTE_NAME,
  ROUTE_PARENT,
  ROUTE_PATH,
  ROUTE_PRESS_COLOR,
  ROUTE_SECTION,
  MENU,
} from '../../constants';

export const contactsPaths: any = {
  [PATH_CONTACTS]: {
    [ROUTE_KEY]: 'contacts',
    [ROUTE_PATH]: '/contacts',
    [ROUTE_PARENT]: null,
    [ROUTE_NAME]: 'Contatos',
    [ROUTE_ICON]: 'phone',
    [ROUTE_BAR_COLOR]: '#ccc',
    [ROUTE_PRESS_COLOR]: '#ddd',
    [ROUTE_SECTION]: MENU,
  },
};
