import React from 'react';
import { StyleSheet, Text, View, ToastAndroid } from 'react-native';

ToastAndroid.show('Sweaty Sweaty Sweaty Balls', ToastAndroid.SHORT);
ToastAndroid.showWithGravity(
  'or sweaty ass crack',
  ToastAndroid.SHORT,
  ToastAndroid.CENTER
);
ToastAndroid.showWithGravityAndOffset(
  "he's really not fussy",
  ToastAndroid.LONG,
  ToastAndroid.BOTTOM,
  25,
  50
);
//var wheresWally = getCurrentPosition()
console.log("testing console.log");

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: 150, height: 150, backgroundColor : 'powderblue'}}>
        <Text>Vako likes sweaty Balls</Text>
        </View>
        <View style={{width: 100, height: 100, backgroundColor : 'skyblue'}}>
        <Text>Jimmy is hiding in his booth</Text>
        </View>
        <View style={{width: 150, height: 100, backgroundColor : 'steelblue'}}>
        <Text>Christian is afraid of the Dark</Text>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
