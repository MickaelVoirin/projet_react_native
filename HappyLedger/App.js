import React from 'react';

import { StyleSheet, StatusBar } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';

import { createStore , applyMiddleware } from 'redux';
import {Provider} from 'react-redux';

import thunk from 'redux-thunk';

import allReducers from './reducers';

import Connection from './Pages/Connection';

import ExchangeSurvey from './components/ExchangeSurvey';
import SendPartnAuth from './components/SendPartnAuth';
import Camera from './components/camera/Camera';
import Home from './components/Home';
import Account from './components/Account';
import Registration from './components/Registration';
import Notifications from './components/Notifications';
import Portefeuille from './components/Portefeuille';
import Recherche from './components/Recherche';
import AcheterVendre from './components/AcheterVendre';
import Investir from './components/Investir';
import Epargner from './components/Epargner';
import DemandePret from './components/DemandePret';
import AssuranceVie from './components/AssuranceVie';

import Profile from './containers/Profile';
import Forms from './containers/Forms';
import CamPicture from './containers/camera/CamPicture';

import { AppLoading, Font } from 'expo';

import { Alert, AsyncStorage } from "react-native"

import * as jsonDatas from './JSON/formdatas.json'

const store = createStore(allReducers, applyMiddleware(thunk));

export default class App extends React.Component {

  state = {
    isReady: false,
  };

  componentDidMount() {
    AsyncStorage.clear();
    StatusBar.setHidden(true);
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    await Font.loadAsync({
      'raleway': require('./assets/fonts/Raleway-Regular.ttf'),
      'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf'),
    });
    try {
      let listOfForms = [];
      for (let key in jsonDatas) {
        if (jsonDatas.hasOwnProperty(key) && key != 'default') {
          await AsyncStorage.setItem(key, JSON.stringify(jsonDatas[key]));
          listOfForms.push({'id':jsonDatas[key]['id'],'name':key,'title':jsonDatas[key]['title']});
        }
        
      };
      await AsyncStorage.setItem('listOfForms', JSON.stringify(listOfForms));
    } catch (error) {
      Alert.alert(error.message);
    }
    

    this.setState({ isReady: true });    
  }

  render() {
    if (this.state.isReady) {
      return (
        <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene
              key="Connection"
              component={Connection}
              title="Connexion"
              hideNavBar={true}
            />
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
              title="SendPartnAuth"
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
      </Provider>
      );
    } else {
      return <AppLoading />;
    }
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
