import React, { Component } from 'react';
import { Text, Body, ListItem, Radio } from 'native-base';

export default class CheckBoxToList extends Component {
 


  render() {
    return (
      <ListItem>
        <Radio 
        
          selected={true} 
          onPress={() => this.props.onChangeRadio(this.props.number)} 
        />
        <Body>
          <Text>{this.props.text}</Text>
        </Body>
      </ListItem>
     );
  }
}
