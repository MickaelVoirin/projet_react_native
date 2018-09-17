import React, { Component } from 'react';
import { View, Text, Content } from 'native-base';
import Range from './Range.js';
import { StyleSheet} from 'react-native';

// Formulaire : permet de lister un ensemble de champs range pour 2 réponses attendues

export default class RangeList extends Component {
  
  render() {
    return (
      <View>
        <Text style={styles.range}>Minimum</Text>
        <Content style={styles.minmax}>
        <Range minmax={this.props.minmax} />
        </Content>
        <Text style={styles.range}>Maximum</Text>
        <Content style={styles.minmax}>
        <Range minmax={this.props.minmax} />
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  range : {
    marginLeft : 10,
    textAlign : 'center',
  },
  minmax : {
    marginLeft : 20,
    marginRight : 20,
    marginBottom : 10,

  }
});
