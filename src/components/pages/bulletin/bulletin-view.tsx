import React, {Component, ReactElement} from 'react';
import {ActivityIndicator, Dimensions, SafeAreaView, ScaledSize} from 'react-native';
import {BulletinViewProps} from '../../../types/bulletin';
import BulletinCard, {BulletinInformation} from '../../atoms/BulletinCard';

class BulletinView extends Component<BulletinViewProps> {
  private dimensions: ScaledSize = Dimensions.get('window');

  public render(): ReactElement<JSX.Element> {
    return (
      <SafeAreaView>
        {this._render()}
      </SafeAreaView>
    );
  }

  private _render = (): JSX.Element | Array<JSX.Element> => {
    if (this.props.bulletins.length === 0) {
      return <ActivityIndicator
        style={{alignSelf: 'center', marginTop: this.dimensions.height / 2 - 40}}
        size={'large'}/>;
    }

    return this._generateBulletin();
  };

  private _generateBulletin = (): Array<JSX.Element> => {
    return this.props.bulletins.map(
      (information: BulletinInformation, index: number) =>
        <BulletinCard key={index} information={information}/>,
    );
  };
}

export default BulletinView;
