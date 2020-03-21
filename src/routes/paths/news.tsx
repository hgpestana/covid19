import {
  PATH_NEWS, ROUTE_BAR_COLOR,
  ROUTE_ICON, ROUTE_KEY,
  ROUTE_NAME,
  ROUTE_PARENT,
  ROUTE_PATH, ROUTE_PRESS_COLOR,
  ROUTE_SECTION,
  MENU,
} from '../../constants';

export const newsPaths: any = {
  [PATH_NEWS]: {
    [ROUTE_KEY]: 'news',
    [ROUTE_PATH]: '/news',
    [ROUTE_PARENT]: null,
    [ROUTE_NAME]: 'Notícias',
    [ROUTE_ICON]: 'news',
    [ROUTE_BAR_COLOR]: '#ccc',
    [ROUTE_PRESS_COLOR]: '#ddd',
    [ROUTE_SECTION]: MENU,
  },
};
