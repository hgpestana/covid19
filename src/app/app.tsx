/*global console*/
import React from 'react';
import {Splash} from '../components/pages';
import store from '../store/store';
import {Provider} from 'react-redux';

const App = (): React.ReactElement<JSX.Element> => {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <Splash/>
    </Provider>
  );
};
export default App;
