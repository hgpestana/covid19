import {
  PATH_INFORMATION, ROUTE_BAR_COLOR,
  ROUTE_ICON, ROUTE_KEY,
  ROUTE_NAME,
  ROUTE_PARENT,
  ROUTE_PATH, ROUTE_PRESS_COLOR,
  ROUTE_SECTION,
  MENU,
} from '../../constants';

export const informationPaths: any = {
  [PATH_INFORMATION]: {
    [ROUTE_KEY]: 'information',
    [ROUTE_PATH]: '/information',
    [ROUTE_PARENT]: null,
    [ROUTE_NAME]: 'Informações',
    [ROUTE_ICON]: 'information',
    [ROUTE_BAR_COLOR]: '#ccc',
    [ROUTE_PRESS_COLOR]: '#ddd',
    [ROUTE_SECTION]: MENU,
  },
};
