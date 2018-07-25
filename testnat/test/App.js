import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base'

//import Test  from './test';

export default class App extends React.Component {
  render() {
    return (
      <Container>
      <Content>
        <ListItem>
          <CheckBox checked={true} />
          <Body>
            <Text>Daily Stand Up</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={false} />
          <Body>
            <Text>Discussion with Client</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={false} color="green"/>
          <Body>
            <Text>Finish list Screen</Text>
          </Body>
        </ListItem>
      </Content> 
    </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
