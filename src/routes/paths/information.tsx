import {MENU} from '../../constants';
import {Route} from '../types/routes';
import {INFORMATION_COLOR, INFORMATION_COLOR_SECONDARY} from '../../constants/colors';

export enum InformationPaths {
  INFORMATION = 'information',
}

export const informationPaths: Array<Route> = [
  {
    key: InformationPaths.INFORMATION,
    path: '/',
    name: 'Informações',
    icon: 'info',
    barColor: INFORMATION_COLOR,
    pressColor: INFORMATION_COLOR_SECONDARY,
    section: MENU,
  },
];
