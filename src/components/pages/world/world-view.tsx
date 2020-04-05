import React, {Component, ReactElement} from 'react';
import {Dimensions, SafeAreaView, ScaledSize, ViewStyle} from 'react-native';
import ArcGis from '../../organisms/ArcGis';

class WorldView extends Component {
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
                uri={'https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd'}/>
      </SafeAreaView>
    );
  }
}

export default WorldView;
