import React, { Component } from 'react';
import { Content } from 'native-base';
import RadioToList from './RadioToList';

// Formulaire : permet de lister un ensemble de champs radio selon le nombre de réponse attendues

export default class RadioList extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      selected : [],
    }
    this.onChangeRadio = this.onChangeRadio.bind(this);
  }

  componentDidMount(){
      const selected = this.props.answers.map( (a) => {
          return false;
      });
      this.setState({selected});
  }

  onChangeRadio(number){
    const selected = this.state.selected.map( (a) => {
        return false;
    });
    selected[number] = true;
    this.setState({selected});
  }

  render() {
    return (
      <Content>
          {
            this.props.answers.map( (a, i) => {
              
              return <RadioToList 
                        key={i} 
                        text={a} 
                        number={i} 
                        onChangeRadio={this.onChangeRadio} 
                        selected={this.state.selected[i]}
                      />
            } )
          }
      </Content>
    );
  }
}
