import React, {Component, ReactElement} from 'react';
import {Dimensions, SafeAreaView, ScaledSize, View} from 'react-native';
import {INFORMATION_COLOR} from '../../../constants/colors';
import YoutubePlayer from '../../organisms/YoutubePlayer';
import {Information, InformationViewProps} from '../../../types/information';

class InformationView extends Component<InformationViewProps> {
  private dimensions: ScaledSize = Dimensions.get('window');

  public render(): ReactElement<JSX.Element> {
    return (
      <SafeAreaView>
        <View>
          {this._generateVideos()}
        </View>
      </SafeAreaView>
    );
  }

  private _generateVideos = (): Array<JSX.Element> => {
    return this.props.information.map((information: Information, index: number) => {
      return (
        <YoutubePlayer
          key={index}
          caption={information.caption}
          captionBackgroundColor={INFORMATION_COLOR}
          captionColor={'#fff'}
          width={this.dimensions.width}
          height={this.dimensions.width * 0.5625}
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
}

export default InformationView;
