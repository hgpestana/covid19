import React, {FunctionComponent} from 'react';
import {ActivityIndicator, Dimensions, ScaledSize, ScrollView} from 'react-native';
import BulletinCard, {BulletinInformation} from '../../atoms/BulletinCard';
import {StoreProps} from '../../../types';
import {storeWrapper} from '../../../storeWrapper';

const BulletinView: FunctionComponent<StoreProps> = (props) => {
  const dimensions: ScaledSize = Dimensions.get('window');
  const _generateBulletin = (): Array<JSX.Element> => {
    return props.bulletins.map(
      (information: BulletinInformation, index: number) =>
        <BulletinCard key={index} information={information}/>,
    );
  };
  const _render = (): JSX.Element | Array<JSX.Element> => {
    if (props.bulletins.length === 0) {
      return <ActivityIndicator
        style={{alignSelf: 'center', marginTop: dimensions.height / 2 - 40}}
        size={'large'}/>;
    }

    return _generateBulletin();
  };

  return (
    <ScrollView>
      {_render()}
    </ScrollView>
  );
};

export default storeWrapper(BulletinView);
