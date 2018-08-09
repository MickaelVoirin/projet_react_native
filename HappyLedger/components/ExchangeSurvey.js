import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Body, Right, Switch } from "native-base";
import HeaderApp from './HeaderApp';
import FooterApp from './FooterApp';
import { StyleSheet } from 'react-native';

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

          <List style={styles.pad}>

            <ListItem>
              <Body>
              <Text
               style={styles.list}
              >BNP Paribas</Text>
              </Body>
              <Right>
              <Switch value={true} />
            </Right>
            </ListItem>

            <ListItem>
              <Body>
              <Text
               style={styles.list}
              >Axa</Text>
              </Body>
              <Right>
              <Switch value={true} />
            </Right>
            </ListItem>

            <ListItem>
              <Body>
              <Text
               style={styles.list}
              >Mr Pignon - CGP</Text>
              </Body>
              <Right>
              <Switch value={false} />
            </Right>
            </ListItem>

            <ListItem>
              <Body>
              <Text
               style={styles.list}
              >Happy Capital</Text>
              </Body>
              <Right>
              <Switch value={true} />
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
