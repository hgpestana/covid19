import {MENU} from '../../constants';
import {Route} from '../types/routes';
import {BULLETIN_COLOR, BULLETIN_COLOR_SECONDARY} from '../../constants/colors';

export enum BulletinPaths {
  BULLETIN = 'news',
}

export const bulletinPaths: Array<Route> = [
  {
    key: BulletinPaths.BULLETIN,
    path: '/bulletin',
    name: 'Comunicados',
    icon: 'library-books',
    barColor: BULLETIN_COLOR,
    pressColor: BULLETIN_COLOR_SECONDARY,
    section: MENU,
  },
];
