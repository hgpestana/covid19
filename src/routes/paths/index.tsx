import {generatePath} from 'react-router';
import {contactsPaths} from './contacts';
import {informationPaths} from './information';
import {bulletinPaths} from './bulletin';
import {statisticsPaths} from './statistics';
import {DEFAULT_PATH, Paths, Route} from '../types/routes';
import {worldPaths} from './world';

export const paths: Array<Route> = [
  ...informationPaths,
  ...bulletinPaths,
  ...statisticsPaths,
  ...worldPaths,
  ...contactsPaths,
];

export function generateRoute(name: Paths): string {
  const route: Route | undefined = paths.find((path: Route): boolean => {
    return path.key === name;
  });

  if (route !== undefined) {
    // eslint-disable-next-line prefer-const
    let {path, parent} = route;
    if (parent !== undefined) {
      const prefix = generateRoute(parent);
      path = prefix + path;
    }
    return path;
  }

  return DEFAULT_PATH;
}

export function generateLink(name: Paths, params?: { [paramName: string]: string | number | boolean | undefined } | undefined): string {
  const route = generateRoute(name);
  return generatePath(route, params);
}
