import React, { Component } from 'react';
import { Text, Body, ListItem, Radio } from 'native-base';

export default class CheckBoxToList extends Component {
 


  render() {
    return (
      <ListItem>
        <Radio 
        
          selected={this.props.selected} 
          onPress={() => this.props.onChangeRadio(this.props.number)} 
        />
        <Body>
          <Text>{this.props.text}</Text>
        </Body>
      </ListItem>
     );
  }
}
