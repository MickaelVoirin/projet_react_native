import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Connection extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Connection page</Text>
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
  topView:{
    position:'absolute',
    top:0,
  }
});
