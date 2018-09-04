import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Grid, Col, Picker, Icon } from "native-base";
import HeaderApp from './HeaderApp';
import FooterApp from './FooterApp';
import { sendNotification } from '../actions/SendNotificationActions';
import { connect } from "react-redux";

class SendPartnAuth extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      receiver:'',
    };
  }

  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  render() {

    const { error, sending, success } = this.props;

    return (
      <Container>
        <HeaderApp title={this.props.title}/>
        <Content contentContainerStyle={{flex: 1}} style={{padding: 10}}>
          <Grid style={styles.grid}>
            <Col>
            <Form>
          <Item stackedLabel>
            <Label>Saisissez le nom de l'utilisateur</Label>
            <Input
              onChangeText={(receiver) => this.setState({receiver})}
            />
          </Item>
          <Item picker last>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Choisissez votre formulaire"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Formulaire 1" value="key0" />
                <Picker.Item label="Formulaire 2" value="key1" />
                <Picker.Item label="Formulaire 3" value="key2" />
              </Picker>
            </Item>
        </Form>
        <Button
          style={styles.submitButton} 
          block 
          rounded 
          onPress={() => this.props.dispatch(sendNotification(this.state.receiver, this.state.selected2))}
        >
          <Text uppercase={false}>Envoyer la demande</Text>
        </Button>
    </Col>
  </Grid>
</Content>
        <FooterApp/>
      </Container>
    )
  }
}

const mstp = state => ({
  success: state.sendNotification.success,
  sending: state.sendNotification.sending,
  error: state.sendNotification.error,
});

export default connect(mstp)(SendPartnAuth);

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
