import React, {Component, ReactElement} from 'react';
import {Text} from 'react-native-elements';
import {Dimensions, ScaledSize, StyleProp, TextStyle, View, ViewStyle} from 'react-native';

export type HeaderProps = {
  textColor: string;
  headerColor: string;
}

class Header extends Component<HeaderProps> {
  private dimensions: ScaledSize = Dimensions.get('window');
  private viewStyle: StyleProp<ViewStyle> = {
    display: 'flex',
    justifyContent: 'center',
    height: 50,
    width: this.dimensions.width / 2,
    paddingVertical: 0,
    paddingRight: 20,
    marginBottom: 20,
    backgroundColor: this.props.headerColor,
  };
  private textStyle: StyleProp<TextStyle> = {
    color: this.props.textColor,
    alignSelf: 'flex-end',
    fontFamily: 'BellotaText-Bold',
    textTransform: 'uppercase',
    fontSize: 20,
  };

  public render(): ReactElement<JSX.Element> {
    return (
      <View style={this.viewStyle}>
        <Text style={this.textStyle}>{this.props.children}</Text>
      </View>
    );
  }
}

export default Header;
