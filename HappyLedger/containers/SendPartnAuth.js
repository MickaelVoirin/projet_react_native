import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Grid, Col, Picker, Icon, Spinner } from "native-base";
import HeaderApp from '../components/HeaderApp';
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

    let rendering;

    if (error) {
      rendering = <Text style={styles.sendingError}>{error.response.data.message}</Text>
    } else if (sending) {
      rendering = <Spinner color='#b330c5' />;
    } else if (success) {
      rendering = <Text style={styles.sendingSuccess}>Notification envoyée <Icon style={styles.iconColor} type="FontAwesome" name="check" /></Text>
    }

    return (
      <Container>
        <HeaderApp title={this.props.title}/>
        <Content contentContainerStyle={{flex: 1}} style={{padding: 10}}>
          <Grid style={styles.grid}>
            <Col>
            <Form>
          <Item stackedLabel>
            <Label style={styles.label}>Saisissez le nom de l'utilisateur</Label>
            <Input
              onChangeText={(receiver) => this.setState({receiver})}
            />
          </Item>
          <Item picker last>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                //style={{ width: undefined }}
                placeholder="Choisissez votre formulaire"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Form. de prêt" value="key0" />
                <Picker.Item label="Form. d'investissement" value="key1" />
                <Picker.Item label="Form. d'assurance vie" value="key2" />
              </Picker>
            </Item>
        </Form>
        {rendering}
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
  sendingError: {
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'raleway',
    color: 'red',
  },
  sendingSuccess: {
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'raleway',
    color: 'green',
  },
  iconColor: {
    color: "green",
  },
  label : {
    paddingLeft: 25,
  }
});
