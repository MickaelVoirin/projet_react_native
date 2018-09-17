import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Header, Title, Button, Icon } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';

import { notifElement, notifsUpdate } from '../actions/notification';
import { addingForms } from '../actions/AddForms';

import { bindActionCreators } from 'redux';
import axios from 'axios';
import urlAPI from '../urlAPI';
import { connect } from "react-redux";

// Header (chaque vue sauf connexion)

class HeaderApp extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
 
      this._verifyNotifs();
      this._MAJNotifandForms();
  }
 
  // Permet de vérifier si de nouvelles notifications sont arrivées en back (JSON)
  _verifyNotifs() {
    
    axios.post(`${urlAPI}notification/get_received`)
      .then((response) => {
        const notificationsJsons = JSON.parse(response.data).items; 
        this.props.notifsUpdate(notificationsJsons);
      })
      .catch((error) => {
        this.setState({err:true});
      });
  }

  // Récupère les éléments (name, title, questions) des formulaires
  _MAJNotifandForms(){
    for(let i of this.props.notifications){
      axios.post(`${urlAPI}kyc/form/${i._id}`)
      .then( (response) => {
        const form = JSON.parse(response.data);
        // Liste des notifications à jour
        let notif = {'_id':form._id, 'name':form.name, 'title':form.company}
        this.props.notifElement(notif);
        // Liste des questions pour chaque formulaire
        let questions = {'name':form.name, list:form.items}  
        this.props.addingForms(questions);             
      })
      .catch((error) => {
        this.setState({err:true});
      });
    }

  }

  render() {
    return (

      <Header>

        <LinearGradient
          colors={['#3c76eb', '#b330c5']}
          style={styles.gradientContainer}
          start={[0, 0]}
          end={[1, 1]}
        >

          <Button
            transparent
            onPress={() => Actions.pop()}
            style={styles.buttonBackPos}
          >
            <Icon name='arrow-back' style={styles.buttonBack} />
          </Button>

          <Title numberOfLines={1} ellipsizeMode='tail' style={styles.title}>{this.props.title}</Title>

          <Button
            transparent
            onPress={() => Actions.Account()}
            style={styles.buttonSettingsPos}
          >
            <Icon type="FontAwesome" name='cog' style={styles.buttonSettings} />
          </Button>

        </LinearGradient>

      </Header>

    );
  }
}

const mdtp = (dispatch) => {
  return bindActionCreators({notifsUpdate, notifElement, addingForms}, dispatch);
};

const mstp = state => ({
  notifications: state.notifications
});

export default connect(mstp, mdtp)(HeaderApp);

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  gradientContainer: {
    position: 'absolute',
    width: win.width,
    top: 0,
    height: 64,
  },
  title: {
    position: 'absolute',
    color: 'white',
    marginTop: 14,
    fontSize: 30,
    fontFamily:'raleway',
    width: 247,
    marginLeft: 60,
  },
  buttonSettingsPos: {
    position: 'absolute',
    right: 0,
    marginRight: 5,
    marginTop: 8,
  },
  buttonSettings: {
    color: 'white',
    fontSize: 30,
  },
  buttonBackPos: {
    position: 'absolute',
    left: 0,
    marginLeft: 5,
    marginTop: 6,
    zIndex: 2,
  },
  buttonBack: {
    color: 'white',
    fontSize: 40,
  },
});
