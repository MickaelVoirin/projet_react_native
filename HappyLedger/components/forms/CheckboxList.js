import React, { Component } from 'react';
import { Content } from 'native-base';
import CheckBoxToList from './CheckBoxToList';

// Formulaire : permet de lister un ensemble de champs checkbox selon le nombre de réponse attendues

export default class CheckboxList extends Component {
 
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Content>
          {
            this.props.answers.map( (a, i) => {
              return <CheckBoxToList key={i} text={a} />
            } )
          }
      </Content>
    );
  }
}
