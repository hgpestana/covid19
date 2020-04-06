import React, {Component, ReactElement} from 'react';
import WebView, {WebViewMessageEvent} from 'react-native-webview';
import {ActivityIndicator, StyleProp, TextStyle, View, ViewStyle} from 'react-native';
import {Text} from 'react-native-elements';
import {DEFAULT_COLOR} from '../../constants';

export type YoutubePlayerProps = {
  height: number;
  width: number;
  videoId: string;
  loop?: boolean;
  caption?: string;
  captionColor?: string;
  captionBackgroundColor?: string;
  allowsInlineMediaPlayback?: boolean;
  controls?: boolean;
  captionsLanguage?: string;
  showCaptions?: boolean;
  startAt?: number;
  finishAt?: number;
  allowFullScreen?: boolean;
  showAnnotations?: boolean;
  playerLang?: string;
  modestBranding?: boolean;
  showRelatedVideos?: boolean;
  listType?: 'playlist' | 'search' | 'user_uploads';
  list?: string;
  onPlayerReady?: (data: string) => void;
  onPlayerError?: (data: string) => void;
  onPlayerStateChange?: (data: string) => void;
  onPlaybackRateChange?: (data: string) => void;
  onPlaybackQualityChange?: (data: string) => void;
}

enum EventTypes {
  playerError = 'playerError',
  playbackRateChange = 'playbackRateChange',
  playerQualityChange = 'playerQualityChange',
  playerReady = 'playerReady',
  playerStateChange = 'playerStateChange',
}

type WebViewMessage = {
  eventType: EventTypes;
  data: string;
};

class YoutubePlayer extends Component<YoutubePlayerProps> {
  private viewStyle: ViewStyle = {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    height: this.props.caption ? this.props.height + 40 : this.props.height,
    width: this.props.width,
    marginBottom: 15,
  };
  private webViewStyle: ViewStyle = {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    height: this.props.height,
    width: this.props.width,
    backgroundColor: DEFAULT_COLOR,
  };
  private captionStyle: StyleProp<ViewStyle> = {
    display: 'flex',
    alignContent: 'flex-end',
    justifyContent: 'center',
    height: 30,
    width: this.props.width - (this.props.width / 7),
    backgroundColor: this.props.captionBackgroundColor,
    paddingVertical: 0,
    marginBottom: 0,
  };
  private textStyle: StyleProp<TextStyle> = {
    color: this.props.captionColor,
    alignSelf: 'flex-end',
    paddingRight: 15,
    fontFamily: 'BellotaText-Bold',
    fontSize: 14,
    textTransform: 'uppercase',
  };

  public render(): ReactElement<JSX.Element> {
    return (
      <View style={this.viewStyle}>
        {this.props.caption &&
        <View style={this.captionStyle}>
          <Text style={this.textStyle}>{this.props.caption}</Text>
        </View>
        }
        <WebView
          style={this.webViewStyle}
          startInLoadingState={true}
          renderLoading={this._renderLoading}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsFullscreenVideo={this.props.allowFullScreen}
          originWhitelist={['*']}
          allowsInlineMediaPlayback={this.props.allowsInlineMediaPlayback}
          onMessage={this._handleMessage}
          source={{html: this._generateHTML()}}
        />
      </View>
    );
  }

  private _renderLoading = (): JSX.Element => {
    return (
      <View style={this.webViewStyle}>
        <ActivityIndicator size={'large'}/>
      </View>
    );
  };

  private _handleMessage = (event: WebViewMessageEvent): void => {
    const message: WebViewMessage = JSON.parse(event.nativeEvent.data);
    switch (message.eventType) {
      case EventTypes.playbackRateChange:
        this.props.onPlaybackRateChange ? this.props.onPlaybackRateChange(message.eventType) : null;
        break;
      case EventTypes.playerQualityChange:
        this.props.onPlaybackQualityChange ? this.props.onPlaybackQualityChange(message.eventType) : null;
        break;
      case EventTypes.playerStateChange:
        this.props.onPlayerStateChange ? this.props.onPlayerStateChange(message.eventType) : null;
        break;
      case EventTypes.playerError:
        this.props.onPlayerError ? this.props.onPlayerError(message.eventType) : null;
        break;
      case EventTypes.playerReady:
        this.props.onPlayerReady ? this.props.onPlayerReady(message.eventType) : null;
        break;
    }
  };

  private _generateHTML = (): string => {
    return (
      `<!DOCTYPE html>
       <html lang="en">
            <head>
                <style>
                  .video {
                      display: flex;
                      width: 100%;
                      height: 100%;
                      margin: 0;
                      padding: 0;
                      align-content: center;
                      justify-content: center;
                  }
                </style>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
                <title>YoutubePlayer</title>
            </head>
            <body class="video">
                <div id="player"/>
                <script>
                    let tag = document.createElement('script');
                    let firstScriptTag = document.getElementsByTagName('script')[0];
                    let player;
                    tag.src = "https://www.youtube.com/iframe_api";
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                    function onYouTubeIframeAPIReady() {
                        player = new YT.Player('player', {
                            height: '${this.props.height}',
                            width: '${this.props.width}',
                            videoId: '${this.props.videoId}',
                            playerVars: {
                                playsinline: ${+(this.props.allowsInlineMediaPlayback ?? 0)},
                                loop: ${+(this.props.loop ?? 0)},
                                controls: ${+(this.props.controls ?? 0)},
                                cc_lang_pref: '${this.props.captionsLanguage ?? ''}',
                                cc_load_policy: ${+(this.props.showCaptions ?? 0)},
                                ${this.props.startAt ? 'start: ' + this.props.startAt + ',' : ''}
                                ${this.props.finishAt ? 'end: ' + this.props.finishAt + ',' : ''}
                                fs: ${+(this.props.allowFullScreen ?? 1)},
                                hl: '${this.props.playerLang ?? 'en'}',
                                iv_load_policy: ${this.props.showAnnotations ? 1 : 3},
                                modestbranding: ${+(this.props.modestBranding ?? 0)},
                                rel: ${+(this.props.showRelatedVideos ?? 1)},
                                ${this.props.listType ? 'listType: ' + this.props.listType + ',' : ''}
                                ${this.props.list ? 'list: ' + this.props.list + ',' : ''}
                            },
                            events: {
                                'onReady': onPlayerReady,
                                'onStateChange': onPlayerStateChange,
                                'onError': onPlayerError,
                                'onPlaybackQualityChange': onPlaybackQualityChange,
                                'onPlaybackRateChange': onPlaybackRateChange,
                            }
                        });
                    }
                    function onPlayerError(event) {
                      window.ReactNativeWebView.postMessage(JSON.stringify({eventType: '${EventTypes.playerError}', data: event.data}))
                    }
                    function onPlaybackRateChange(event) {
                      window.ReactNativeWebView.postMessage(JSON.stringify({eventType: '${EventTypes.playbackRateChange}', data: event.data}))
                    }
                    function onPlaybackQualityChange(event) {
                      window.ReactNativeWebView.postMessage(JSON.stringify({eventType: '${EventTypes.playerQualityChange}', data: event.data}))
                    }
                    function onPlayerReady(event) {
                      window.ReactNativeWebView.postMessage(JSON.stringify({eventType: '${EventTypes.playerReady}', data: ''}))
                    }
                    function onPlayerStateChange(event) {
                      window.ReactNativeWebView.postMessage(JSON.stringify({eventType: '${EventTypes.playerStateChange}', data: event.data}))
                    }
                </script>
            </body>
       </html>`);
  };
}

export default YoutubePlayer;
