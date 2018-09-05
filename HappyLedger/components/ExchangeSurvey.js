import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Body, Right, Switch } from "native-base";
import HeaderApp from './HeaderApp';
import FooterApp from '../containers/FooterApp';
import { StyleSheet } from 'react-native';

class ExchangeSurvey extends Component {
  constructor(props){
    super(props);

    state = {
      isSwitchOn : null,
      isSwitchOn1 : null,
      isSwitchOn2 : null,
      isSwitchOn3 : null,
    }
  }

  handleChange(event){
    this.setState({
      [event]: !this.state[event],
    });
  }

  componentWillMount(){
    this.setState( {
      isSwitchOn: this.props.isSwitchOn,
      isSwitchOn1: this.props.isSwitchOn1,
      isSwitchOn2: this.props.isSwitchOn2,
      isSwitchOn3: this.props.isSwitchOn3,
    });
  }


  render() {
    return (

      <Container>
        <HeaderApp title={this.props.title}/>
        <Content>

          <List style={styles.pad}>

            <ListItem>
              <Body>
              <Text
               style={styles.list}
              >BNP Paribas</Text>
              </Body>
              <Right>
              <Switch 
              onValueChange={() => this.handleChange('isSwitchOn')}
              value= {this.state.isSwitchOn}
              />
            </Right>
            </ListItem>

            <ListItem>
              <Body>
              <Text
               style={styles.list}
              >Axa</Text>
              </Body>
              <Right>
              <Switch 
              onValueChange={() => this.handleChange('isSwitchOn1')}
              value= {this.state.isSwitchOn1}
              />
            </Right>
            </ListItem>

            <ListItem>
              <Body>
              <Text
               style={styles.list}
              >Mr Pignon - CGP</Text>
              </Body>
              <Right>
              <Switch 
              onValueChange={() => this.handleChange('isSwitchOn2')}
              value= {this.state.isSwitchOn2}
              />
            </Right>
            </ListItem>

            <ListItem>
              <Body>
              <Text
               style={styles.list}
              >Happy Capital</Text>
              </Body>
              <Right>
              <Switch
              onValueChange={() => this.handleChange('isSwitchOn3')}
              value= {this.state.isSwitchOn3}
              />
            </Right>
            </ListItem>

          </List>
        </Content>
        <FooterApp/>
      </Container>
    )

  }
}

export default ExchangeSurvey;

const styles = StyleSheet.create({
  list: {
    fontFamily: 'raleway',
  },
  pad: {
    marginTop: 10,
  }
})
