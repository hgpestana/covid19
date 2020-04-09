import React, {FunctionComponent} from 'react';
import WebView from 'react-native-webview';
import {ActivityIndicator, Dimensions, ScaledSize, View, ViewStyle} from 'react-native';

export type ArcGisProps = {
  uri: string;
}

const ArcGis: FunctionComponent<ArcGisProps> = (props) => {
  const dimensions: ScaledSize = Dimensions.get('window');

  const viewStyle: ViewStyle = {
    display: 'flex',
    flex: 1,
    width: dimensions.width,
    alignContent: 'stretch',
    justifyContent: 'center',
  };

  const webViewStyle: ViewStyle = {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  };

  const loaderStyle: ViewStyle = {
    height: dimensions.height - 56,
    width: dimensions.width,
    alignContent: 'center',
    justifyContent: 'center',
  };

  const _renderLoading = (): JSX.Element => {
    return (
      <View style={loaderStyle}>
        <ActivityIndicator size={'large'}/>
      </View>
    );
  };

  return (
    <View style={viewStyle}>
      <WebView
        style={webViewStyle}
        startInLoadingState={true}
        renderLoading={_renderLoading}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{uri: props.uri}}
      />
    </View>
  );
};

export default ArcGis;
