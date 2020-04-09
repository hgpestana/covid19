import React, {FunctionComponent} from 'react';
import ArcGis from '../../organisms/ArcGis';

const WorldView: FunctionComponent = () => {

  return (
    <ArcGis uri={'https://who.sprinklr.com/'}/>
  );
};

export default WorldView;
