import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base'

export default class Account extends React.Component {
  
  
  
  render() {
    return (
      <View style={styles.container}>
        <Container>
          <Text>Form view</Text>
          <Text>Form view</Text>
          <Text>Form view</Text>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a936c9',
  },
  form: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
