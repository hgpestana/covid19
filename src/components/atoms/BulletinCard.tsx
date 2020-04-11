import React, {Component, ReactElement} from 'react';
import {Dimensions, Linking, ScaledSize, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {BULLETIN_COLOR, BULLETIN_COLOR_SECONDARY, DEFAULT_COLOR} from '../../constants';

export type BulletinInformation = {
  name: string;
  description: string;
  date: {_nanoseconds: number; _seconds: number};
  uri: string;
}

export type BulletinProps = {
  information: BulletinInformation;
}

type BulletinCardStyles = {
  cardStyle: ViewStyle;
  cardTitle: TextStyle;
  cardDescription: TextStyle;
  buttonStyle: TextStyle;
  dateStyle: TextStyle;
}

class BulletinCard extends Component<BulletinProps> {
  private dimensions: ScaledSize = Dimensions.get('window');
  private styles: BulletinCardStyles = StyleSheet.create({
    cardStyle: {
      width: this.dimensions.width - 30,
      padding: 20,
      marginVertical: 8,
      alignSelf: 'center',
      backgroundColor: DEFAULT_COLOR,
      shadowColor: BULLETIN_COLOR_SECONDARY,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    cardTitle: {
      fontSize: 18,
      fontFamily: 'BellotaText-Bold',
      color: BULLETIN_COLOR,
      marginVertical: 7,
    },
    cardDescription: {
      fontSize: 16,
      fontFamily: 'Roboto-Light',
    },
    buttonStyle: {
      width: 100,
      height: 48,
      marginVertical: 20,
    },
    dateStyle: {
      paddingTop: 10,
      fontSize: 12,
      borderTopWidth: 0.5,
      borderTopColor: BULLETIN_COLOR_SECONDARY,
      fontFamily: 'BellotaText-Light',
    },
  });

  public render(): ReactElement<JSX.Element> {
    return (

      <View style={this.styles.cardStyle}>
        <Text style={this.styles.cardTitle}>{this.props.information.name}</Text>
        <Text style={this.styles.cardDescription}>{this.props.information.description}</Text>
        <Button
          buttonStyle={this.styles.buttonStyle}
          onPress={this._link(this.props.information.uri)}
          title={'Ler mais'}/>
        <Text
          style={this.styles.dateStyle}>
          {new Date(this.props.information.date._seconds * 1000).toLocaleDateString()}
        </Text>
      </View>
    );
  }

  private _link = (url: string) => (): void => {
    Linking.openURL(url);
  };
}

export default BulletinCard;

