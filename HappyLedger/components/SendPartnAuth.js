import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Grid, Col } from "native-base";
import HeaderApp from './HeaderApp';
import FooterApp from './FooterApp';

class SendPartnAuth extends Component {

  render() {
    return (

      <Container>
        <HeaderApp title={this.props.title}/>
        <Content contentContainerStyle={{flex: 1}} style={{padding: 10}}>
          <Grid style={styles.grid}>
            <Col>
            <Form>
          <Item stackedLabel last>
            <Label>Saisissez le nom de l'utilisateur</Label>
            <Input/>
          </Item>
        </Form>
        <Button style={styles.submitButton} block rounded >
          <Text>Envoyer la demande</Text>
        </Button>
    </Col>
  </Grid>
</Content>
        <FooterApp/>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  submitButton : {
    marginTop: 20,
    backgroundColor: '#b330c5',
  },
});

export default SendPartnAuth;