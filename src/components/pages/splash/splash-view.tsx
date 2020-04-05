import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {PRIMARY_COLOR, SECONDARY_COLOR, SECONDARY_TEXT_COLOR} from '../../../constants/colors';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    color: SECONDARY_TEXT_COLOR,
    backgroundColor: SECONDARY_COLOR,
    fontSize: 40,
    alignSelf: 'center',
    fontFamily: 'BellotaText-Light',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  mainView: {
    flex: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  hashtag: {
    color: SECONDARY_TEXT_COLOR,
    backgroundColor: PRIMARY_COLOR,
    fontSize: 22,
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontFamily: 'Roboto-Regular',
  },
  hashtagView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

class SplashView extends Component {
  public render(): React.ReactElement<JSX.Element> {
    return (
      <SafeAreaView style={styles.view}>
        <View style={styles.mainView}>
          <Text style={styles.main}>CORONAVÍRUS</Text>
          <Text style={styles.main}>COVID-19</Text>
        </View>
        <View style={styles.hashtagView}>
          <Text style={styles.hashtag}>#euficoemcasa</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default SplashView;
