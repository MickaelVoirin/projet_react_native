import React, { Component } from 'react';
import { Container, Content, Right, Body, Icon, Text, Spinner, ListItem, Separator } from 'native-base';
import { StyleSheet } from 'react-native';
import FooterApp from './FooterApp';
import { Actions } from 'react-native-router-flux';
import HeaderApp from '../components/HeaderApp';
import { connect } from 'react-redux';
import { AsyncStorage } from "react-native";

// Vue profile (depuis le footerApp)

class Profile extends Component {
  constructor(props){
    super(props);
  }

  state = {
    listOfForms : [],
    isReady : false,
    err: false,
    notifications:false,
    mount:false
  }

  async componentDidMount() { 
    await this._checkNotifs();
    AsyncStorage.setItem('notifications', JSON.stringify(this.props.notifications));
    this.setState({isReady:true});
  }
  
  // Récupère les notifications dans le state
  _checkNotifs(){
    if(this.props.notifications.length !== 0){
      this.setState({listOfForms : this.props.notifications});
    }
  }

  render() {
    
    let rendering = '';
    
    if (this.state.err) {
      rendering =  <Text>Une erreur est survenue dans le traitement de votre demande.</Text>;
    } 
    else if(!this.state.isReady){
      rendering = <Spinner color='#a936c9' />;
    } 
    else {

      rendering = this.props.notifications.map(form =>
      <ListItem
      key={form._id}
      onPress={() => Actions.Forms({company:form.title, nameform: form.name, numberquestion: 0})}
    >
    <Body>
      <Text
        uppercase={false}
        style={styles.text}
      >{form.title}</Text> 
      {form.new && <Text style={{color:'red'}}>nouveau</Text> }
      </Body>
      <Right>
        <Icon type="MaterialIcons" name="keyboard-arrow-right"/>
      </Right>
    </ListItem>
    )}
  
    return (
      <Container>
        <HeaderApp title={this.props.title}/>
        <Content
          style={{padding:10}}
        >
         <Separator 
         bordered
         style={styles.separator}>
            <Text>A COMPLETER</Text>
          </Separator>

        { rendering }

        <Separator 
        bordered
        style={styles.separatorComplet}>
            <Text>COMPLET</Text>
          </Separator>

        </Content>
        <FooterApp/>
      </Container>
    );
  }
}

const mstp = state => ({
  notifications: state.notifications
});


export default connect(mstp)(Profile);

const styles = StyleSheet.create({
  separator: {
    marginTop: 2,
    marginBottom: 2,
  },
  separatorComplet : {
    marginTop: 2,
  },
  text: {
    fontFamily:'raleway',
  }
});
