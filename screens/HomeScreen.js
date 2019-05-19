import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
   /* header: null,*/
  };

  render() {
    return (
      <View style={styles.container}>
          <Image
              source={require('../assets/sprites/flareon_f.gif')}
              style={styles.welcomeImage}
          />
          <Image
              source={require('../assets/sprites/flareon_s_1.gif')}
              style={styles.welcomeImage}
          />
          <Image
              source={require('../assets/sprites/pikachu_b.gif')}
              style={styles.welcomeImage}
          />
          <Image
              source={require('../assets/sprites/pikachu_s_2.gif')}
              style={styles.welcomeImage}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

});
