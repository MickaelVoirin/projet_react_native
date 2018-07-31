import React, { Component } from 'react';
import { View, Text } from 'native-base';
import Range from './Range.js';

export default class RangeList extends Component {
  
  render() {
    return (
      <View>
        <Text>Minimum :</Text>
        <Range minmax={this.props.minmax} />
        <Text>Maximum :</Text>
        <Range minmax={this.props.minmax} />
      </View>
    );
  }
}
