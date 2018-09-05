import React, { Component } from 'react';
import { Slider } from 'react-native';
import { View, Text } from 'native-base';

export default class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.minmax[0],
    };
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseInt(value),
      };
    });
  }

  render() {
    const {value} = this.state;
    return (
      <View>
        <Text>{String(value)}</Text>
        <Slider
          step={5000}
          minimumValue={this.props.minmax[0]}
          maximumValue={this.props.minmax[1]}
          onValueChange={this.change.bind(this)}
          value={value}
        />
      </View>
    );
  }
}
