import React from 'react';

import { StyleSheet, StatusBar } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';

import { createStore } from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';

import Menu from './Navigation/Menu';
import Connection from './Pages/Connection';
import Registration from './Pages/Registration';
import Account from './Pages/Account';
import Profile from './Pages/Profile';
import Forms from './containers/Forms';
import Camera from './components/camera/Camera';
import CamPicture from './containers/camera/CamPicture';
import ExchangeSurvey from './Pages/ExchangeSurvey';
import SendPartnAuth from './Pages/SendPartnAuth';

import { AppLoading, Font } from 'expo';

const store = createStore(allReducers);

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  };

  componentDidMount() {
    StatusBar.setHidden(true);
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    await Font.loadAsync({
      'raleway': require('./assets/fonts/Raleway-Regular.ttf'),
      'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <Provider store={store}>
        <Router navBar={Menu}>
          <Stack key="root">
            <Scene
              key="Connection"
              component={Connection}
              title="Connection"
              hideNavBar={true}
            />
            <Scene
              key="Registration"
              component={Registration}
              title="Registration"
            />
            <Scene
              key="Account"
              component={Account}
              title="Account Manager"
            />
            <Scene
              key="Profile"
              component={Profile}
              title="Profile Manager"
              hideNavBar={true}
            />
            <Scene
              key="Forms"
              component={Forms}
              title="Forms"
              hideNavBar={true}
            />
            <Scene
              key="ExchangeSurvey"
              component={ExchangeSurvey}
              title="ExchangeSurvey"
            />
            <Scene
              key="SendPartnAuth"
              component={SendPartnAuth}
              title="SendPartnAuth"
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
