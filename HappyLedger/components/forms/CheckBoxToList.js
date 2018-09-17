import React, { Component } from 'react';
import {  Text, Body, ListItem, CheckBox } from 'native-base';

// Formulaire : permet d'afficher les champs checkbox appelés depuis checkboxList

export default class CheckBoxToList extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      check:false
    }
  }

  onPressCheckBox(){
      let check = !this.state.check;
      this.setState({check});
  } 

  render() {
    return (
      <ListItem>
        <CheckBox
          checked={this.state.check}
          onPress={() => this.onPressCheckBox()} 
          />
          <Body>
          <Text >{this.props.text}</Text>
          </Body>
      </ListItem>
     );
  }
}
