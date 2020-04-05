import React, {Component, ReactElement} from 'react';
import {Dimensions, Linking, ScaledSize, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {Icon, Text} from 'react-native-elements';

export type CardProps = {
  title?: string;
  description?: string;
  email?: string;
  mobile?: string;
  phone?: string;
  cardColor?: string;
  textColor?: string;
}

type HeaderStyles = {
  cardStyle: ViewStyle;
  cardTitle: TextStyle;
  cardDescription: TextStyle;
  contactViewStyle: ViewStyle;
  contactIconStyle: TextStyle;
  contactTextStyle: TextStyle;
}

class ContactCard extends Component<CardProps> {
  private dimensions: ScaledSize = Dimensions.get('window');
  private styles: HeaderStyles = StyleSheet.create({
    cardStyle: {
      backgroundColor: this.props.cardColor,
      padding: 10,
      marginVertical: 8,
      alignSelf: 'center',
      width: this.dimensions.width - 100,
    },
    cardTitle: {
      fontSize: 18,
      fontFamily: 'Roboto-Bold',
      color: this.props.textColor,
      marginVertical: 3,
    },
    cardDescription: {
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      color: this.props.textColor,
      marginVertical: 1,
    },
    contactViewStyle: {
      display: 'flex',
      flexDirection: 'row',
      marginVertical: 5,
      justifyContent: 'flex-start',
      alignContent: 'center',
    },
    contactIconStyle: {
      marginHorizontal: 5,
      width: 21,
      alignSelf: 'center',
      color: this.props.textColor,
    },
    contactTextStyle: {
      alignSelf: 'center',
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      color: this.props.textColor,
    },
  });

  public render(): ReactElement<JSX.Element> {
    return (
      <View style={this.styles.cardStyle}>
        {this.props.title &&
        <Text style={this.styles.cardTitle}>{this.props.title}</Text>}
        {this.props.description &&
        <Text style={this.styles.cardDescription}>{this.props.description}</Text>}
        {this.props.mobile &&
        <View
          style={this.styles.contactViewStyle}
          onTouchStart={this._link(`tel:${this.props.mobile}`)}>
          <Icon
            iconStyle={this.styles.contactIconStyle}
            size={32}
            name={'mobile'}
            type={'font-awesome'}/>
          <Text style={this.styles.contactTextStyle}>{this.props.mobile}</Text>
        </View>}
        {this.props.phone &&
        <View
          style={this.styles.contactViewStyle}
          onTouchStart={this._link(`tel:${this.props.phone}`)}>
          <Icon
            iconStyle={this.styles.contactIconStyle}
            size={24}
            name={'phone'}
            type={'font-awesome'}/>
          <Text style={this.styles.contactTextStyle}>{this.props.phone}</Text>
        </View>}
        {this.props.email &&
        <View
          style={this.styles.contactViewStyle}
          onTouchStart={this._link(`mailto:${this.props.email}`)}>
          <Icon
            iconStyle={this.styles.contactIconStyle}
            size={24}
            name={'at'}
            type={'font-awesome'}/>
          <Text style={this.styles.contactTextStyle}>{this.props.email}</Text>
        </View>}
      </View>
    );
  }

  private _link = (url: string) => (): void => {
    Linking.openURL(url);
  };
}

export default ContactCard;
