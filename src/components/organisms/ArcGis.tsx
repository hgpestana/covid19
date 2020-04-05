import React, {Component, ReactElement} from 'react';
import WebView from 'react-native-webview';
import {ActivityIndicator, View, ViewStyle} from 'react-native';

export type ArcGisProps = {
  uri: string;
  style?: ViewStyle;
}

class ArcGis extends Component<ArcGisProps> {
  private webViewStyle: ViewStyle = {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  };

  public render(): ReactElement<JSX.Element> {
    return (
      <View style={this.props.style}>
        <WebView
          style={this.webViewStyle}
          startInLoadingState={true}
          renderLoading={this._renderLoading}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{uri: this.props.uri}}
        />
      </View>
    );
  }

  private _renderLoading = (): JSX.Element => {
    return (
      <View style={this.props.style}>
        <ActivityIndicator size={'large'}/>
      </View>
    );
  };
}

export default ArcGis;
