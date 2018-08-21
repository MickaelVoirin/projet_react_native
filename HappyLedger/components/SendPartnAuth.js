import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, View, Content, Button, Text } from "native-base";
import HeaderApp from './HeaderApp';

class SendPartnAuth extends Component {

  render() {
    return (

      <Container>
        <HeaderApp title={this.props.title}/>
        <Content>
          <View style={styles.flexCont}>
            <View style={styles.divRow}>
              <Text style={styles.textAlign}>John Doe</Text>
              <Button style={styles.butt} rounded>
                <Text>Envoyer la demande</Text>
              </Button>
            </View>
          </View>
          <View style={styles.flexCont}>
            <View style={styles.divRow}>
              <Text style={styles.textAlign}>Allan Smithy</Text>
              <Button style={styles.butt} rounded>
                <Text>Envoyer la demande</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  flexCont: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  divRow: {
    flexDirection: 'row',
  },
  butt: {
    backgroundColor: '#a936c9',
  },
  textAlign: {
    marginTop: 13,
    marginRight: 10,
  },
});

export default SendPartnAuth;