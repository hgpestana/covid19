/*global console*/
import React from 'react';
import {Splash} from '../components/pages';

const App = (): React.ReactElement<JSX.Element> => {
  console.disableYellowBox = true;
  return <Splash />;
};
export default App;
