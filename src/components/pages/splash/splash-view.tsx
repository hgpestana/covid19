import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Text} from 'react-native-elements';

class SplashView extends Component<{}, {}> {
  render(): React.ReactElement<any> {
    return (
      <SafeAreaView style={styles.view}>
        <Text style={styles.main}>COVID-19</Text>
        <Text style={styles.hashtag}>#euficoemcasa</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#016537',
  },
  main: {
    color: '#ffffff',
    fontSize: 55,
    fontFamily: 'BellotaText-Light',
    marginBottom: 100,
  },
  hashtag: {
    color: '#ffffff',
    fontSize: 22,
    fontFamily: 'Roboto-Regular',
  },
});

export default SplashView;
