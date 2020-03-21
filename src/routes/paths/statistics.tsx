import {
  PATH_STATISTICS, ROUTE_BAR_COLOR,
  ROUTE_ICON, ROUTE_KEY,
  ROUTE_NAME,
  ROUTE_PARENT,
  ROUTE_PATH, ROUTE_PRESS_COLOR,
  ROUTE_SECTION,
  MENU,
} from '../../constants';

export const statisticsPaths: any = {
  [PATH_STATISTICS]: {
    [ROUTE_KEY]: 'statistics',
    [ROUTE_PATH]: '/statistics',
    [ROUTE_PARENT]: null,
    [ROUTE_NAME]: 'Estatísticas',
    [ROUTE_ICON]: 'graph',
    [ROUTE_BAR_COLOR]: '#ccc',
    [ROUTE_PRESS_COLOR]: '#ddd',
    [ROUTE_SECTION]: MENU,
  },
};
