import React, {FunctionComponent} from 'react';
import {Dimensions, ScaledSize, ScrollView} from 'react-native';
import {Information, StoreProps} from '../../../types';
import {storeWrapper} from '../../../storeWrapper';
import YoutubePlayer from '../../organisms/YoutubePlayer';
import {INFORMATION_COLOR} from '../../../constants';

const InformationView: FunctionComponent<StoreProps> = (props) => {
  const dimensions: ScaledSize = Dimensions.get('window');
  const _generateVideos = (): Array<JSX.Element> => {
    return props.information.map((information: Information, index: number) => {
      return (
        <YoutubePlayer
          key={index}
          caption={information.caption}
          captionBackgroundColor={INFORMATION_COLOR}
          captionColor={'#fff'}
          width={dimensions.width}
          height={dimensions.width * 0.5625}
          videoId={information.videoId}
          allowFullScreen={false}
          allowsInlineMediaPlayback={true}
          showRelatedVideos={false}
          controls={true}
          loop={true}
        />
      );
    });
  };

  return (
    <ScrollView>
      {_generateVideos()}
    </ScrollView>
  );

};

export default storeWrapper(InformationView);
