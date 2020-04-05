import {MENU} from '../../constants';
import {Route} from '../types/routes';
import {WORLD_COLOR, WORLD_COLOR_SECONDARY} from '../../constants/colors';

export enum WorldPaths {
  WORLD = 'WORLD',
}

export const worldPaths: Array<Route> = [
  {
    key: WorldPaths.WORLD,
    path: '/world',
    name: 'Mundo',
    icon: 'public',
    barColor: WORLD_COLOR,
    pressColor: WORLD_COLOR_SECONDARY,
    section: MENU,
  },
];
