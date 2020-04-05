import {ContactsPaths} from '../paths/contacts';
import {InformationPaths} from '../paths/information';
import {BulletinPaths} from '../paths/bulletin';
import {StatisticsPaths} from '../paths/statistics';
import {WorldPaths} from '../paths/world';

export const DEFAULT_PATH = InformationPaths.INFORMATION;

export type Paths =
  | ContactsPaths
  | InformationPaths
  | BulletinPaths
  | WorldPaths
  | StatisticsPaths;

export type Route = {
  key: Paths;
  path: string;
  parent?: Paths;
  name?: string;
  icon?: string;
  barColor?: string;
  pressColor?: string;
  section?: string;
};
