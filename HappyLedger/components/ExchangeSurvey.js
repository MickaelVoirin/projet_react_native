import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from "native-base";
import HeaderApp from './HeaderApp';

class ExchangeSurvey extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <HeaderApp />
        <Content>
          <List>
            <ListItem>
              <Text>BNP Paribas</Text>
            </ListItem>
            <ListItem>
              <Text>Axa</Text>
            </ListItem>
            <ListItem>
              <Text>Morgan Chase</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    )

  }
}

export default ExchangeSurvey
