import React, { Component } from 'react';
import { Text, Body, ListItem, Radio } from 'native-base';

// Formulaire : permet d'afficher les champs radio appelés depuis radioList

export default class CheckBoxToList extends Component {

  render() {
    return (
      <ListItem>
        <Radio 
          selected={this.props.selected} 
          onPress={() => this.props.onChangeRadio(this.props.number)} 
        />
        <Body>
          <Text onPress={() => this.props.onChangeRadio(this.props.number)}>{this.props.text}</Text>
        </Body>
      </ListItem>
     );
  }
}
