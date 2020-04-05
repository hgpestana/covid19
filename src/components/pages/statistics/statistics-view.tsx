import React, {Component, ReactElement} from 'react';
import {Dimensions, SafeAreaView, ScaledSize, ViewStyle} from 'react-native';
import ArcGis from '../../organisms/ArcGis';

class StatisticsView extends Component {
  private dimensions: ScaledSize = Dimensions.get('window');
  private viewStyle: ViewStyle = {
    display: 'flex',
    alignContent: 'stretch',
    justifyContent: 'center',
    height: this.dimensions.height - 56,
  };

  public render(): ReactElement<JSX.Element> {
    return (
      <SafeAreaView>
        <ArcGis style={this.viewStyle}
                uri={'https://disasterresponse.maps.arcgis.com/apps/opsdashboard/index.html#/e9dd1dea8d1444b985d38e58076d197a'}/>
      </SafeAreaView>
    );
  }
}

export default StatisticsView;
