import {generatePath} from 'react-router';
import {splashPaths} from './splash';
import {contactsPaths} from './contacts';
import {informationPaths} from './information';
import {newsPaths} from './news';
import {statisticsPaths} from './statistics';

export const paths: any = {
  ...splashPaths,
  ...contactsPaths,
  ...informationPaths,
  ...newsPaths,
  ...statisticsPaths,
};

export function generateLink(name: string, params?: any | undefined) {
  let route = generateRoute(name);
  return generatePath(route, params);
}

export function generateTabs() {
  paths.map(path => {

  });
}

export function generateRoute(name: string) {
  let route = paths[name];
  let {ROUTE_PATH, ROUTE_PARENT} = route;
  if (ROUTE_PARENT !== null) {
    let prefix = generateRoute(ROUTE_PARENT);
    ROUTE_PATH = prefix + ROUTE_PATH;
  }
  return ROUTE_PATH;
}
