import React from 'react';
import { StyleSheet, StatusBar, AsyncStorage } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import axios from 'axios';
import urlAPI from '../urlAPI';
import { AppLoading, Font } from 'expo';
import { Root } from 'native-base';

// import des composants
import ExchangeSurvey from '../components/ExchangeSurvey';
import Camera from '../components/camera/Camera';
import Home from '../components/Home';
import Account from '../components/Account';
import Registration from '../components/Registration';
import Notifications from '../containers/Notifications';
import Portefeuille from '../components/Portefeuille';
import Recherche from '../components/Recherche';
import AcheterVendre from '../components/AcheterVendre';
import Investir from '../components/Investir';
import Epargner from '../components/Epargner';
import DemandePret from '../components/DemandePret';
import AssuranceVie from '../components/AssuranceVie';

// import des containers
import Profile from './Profile';
import Forms from './Forms';
import CamPicture from './camera/CamPicture';
import SendPartnAuth from './SendPartnAuth';

import { addNotifs } from '../actions/notification';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

class Launch extends React.Component {

  state = {
    isReady: false,
    notificationsStorage : [],
    notificationsJsons : [],
    err : false
  };

  async componentDidMount() {
    AsyncStorage.clear();
    StatusBar.setHidden(true);
    await this._loadAssetsAsync();
    await this._loadNotifStorage();
    await this._loadNotifJsons();
    await this._saveStoreAndRedux(); 
    this.setState({ isReady: true });  
  }

// chargement des polices de caractères
  async _loadAssetsAsync() {
    await Font.loadAsync({
      'raleway': require('../assets/fonts/Raleway-Regular.ttf'),
      'Roboto_medium': require('../assets/fonts/Roboto-Medium.ttf'),
    });  
  }

// chargement des notifications depuis le stockage du téléphone
  async _loadNotifStorage(){
    let notificationsStorage = await AsyncStorage.getItem('notifications');
    notificationsStorage = (notificationsStorage == null) ? [] : JSON.parse(notificationsStorage);
    this.setState({notificationsStorage});
  }

// chargement des notifications depuis le backend
  async _loadNotifJsons() {
    await axios.post(`${urlAPI}notification/get_received`)
      .then( (response) => {
        const notificationsJsons = JSON.parse(response.data).items;
        this.setState({notificationsJsons});
      })
      .catch((error) => {
        this.setState({err:true});
      });
  }

// enregistrement des notifications dans le stockage du téléphone
  async _saveStoreAndRedux() {
    const notificationsStorage = [];
    for(let valeurJsons of this.state.notificationsJsons){
      let temoin = true;
      for(let valeurStorage of this.state.notificationsStorage){
        if(valeurStorage._id === valeurJsons._id){
            temoin = false; 
        } 
      }
      if(temoin){valeurJsons['new'] = true};
      notificationsStorage.push(valeurJsons); 
    } 
    await AsyncStorage.setItem('notifications', JSON.stringify(notificationsStorage));
    await this.props.addNotifs(notificationsStorage);
    this.setState({notificationsStorage});
  }

  render() {
    if (this.state.isReady) {
      return (
        <Root>
        <Router>
          <Stack key="root">
            <Scene
              key="Registration"
              component={Registration}
              title="Créer un compte"
              hideNavBar={true}
            />
              <Scene
              key="Home"
              component={Home}
              title="Home"
              hideNavBar={true}
              initial= {true}
            />
            <Scene
              key="Account"
              component={Account}
              title="Paramètres"
              hideNavBar={true}
            />
            <Scene
              key="Recherche"
              component={Recherche}
              title="Recherche"
              hideNavBar={true}
            />
            <Scene
              key="Portefeuille"
              component={Portefeuille}
              title="Portefeuille"
              hideNavBar={true}
            />
            <Scene
              key="AcheterVendre"
              component={AcheterVendre}
              title="AcheterVendre"
              hideNavBar={true}
            />
            <Scene
              key="Investir"
              component={Investir}
              title="Investir"
              hideNavBar={true}
            />
            <Scene
              key="Epargner"
              component={Epargner}
              title="Epargner"
              hideNavBar={true}
            />
            <Scene
              key="DemandePret"
              component={DemandePret}
              title="Demande de Prêt"
              hideNavBar={true}
            />
            <Scene
              key="AssuranceVie"
              component={AssuranceVie}
              title="Assurance vie"
              hideNavBar={true}
            />
            <Scene
              key="Profile"
              component={Profile}
              title="Profil"
              hideNavBar={true}
              toMount={true}
            />
            <Scene
              key="Forms"
              component={Forms}
              title="Formulaires"
              hideNavBar={true}
            />
            <Scene
              key="ExchangeSurvey"
              component={ExchangeSurvey}
              title="Autorisations"
              hideNavBar={true}
            />
            <Scene
              key="Notifications"
              component={Notifications}
              title="Notifications"
              hideNavBar={true}
            />
            <Scene
              key="SendPartnAuth"
              component={SendPartnAuth}
              title="Notifications"
              hideNavBar={true}
            />
            <Scene
              key="Camera"
              component={Camera}
              title="Camera"
              hideNavBar={true}
            />
            <Scene
              key="CamPicture"
              component={CamPicture}
              title="Picture"
              hideNavBar={true}
            />
          </Stack>
        </Router>
        </Root>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const mdtp = (dispatch) => {
  return bindActionCreators({addNotifs}, dispatch);
};

export default connect(null, mdtp)(Launch);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
