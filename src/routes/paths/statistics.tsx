import {MENU} from '../../constants';
import {Route} from '../types/routes';
import {STATISTICS_COLOR, STATISTICS_COLOR_SECONDARY} from '../../constants/colors';

export enum StatisticsPaths {
  STATISTICS = 'statistics',
}

export const statisticsPaths: Array<Route> = [
  {
    key: StatisticsPaths.STATISTICS,
    path: '/statistics',
    name: 'Estatísticas',
    icon: 'assessment',
    barColor: STATISTICS_COLOR,
    pressColor: STATISTICS_COLOR_SECONDARY,
    section: MENU,
  },
];
