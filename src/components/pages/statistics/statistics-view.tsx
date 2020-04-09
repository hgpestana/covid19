import React, {FunctionComponent} from 'react';
import ArcGis from '../../organisms/ArcGis';

const StatisticsView: FunctionComponent = () => {
  return (
    <ArcGis
      uri={'https://disasterresponse.maps.arcgis.com/apps/opsdashboard/index.html#/e9dd1dea8d1444b985d38e58076d197a'}/>
  );
};

export default StatisticsView;
