import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Menu from './Navigation/Menu';
import Connection from './Pages/Connection';
import Registration from './Pages/Registration';
import Account from './Pages/Account';
import Profile from './Pages/Profile';

export default class App extends React.Component {

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
        <Router navBar = {Menu}>
          <Stack key="root">
            <Scene key="Connection" component={Connection} title="Connection"  hideNavBar={true}/>
            <Scene key="Registration" component={Registration} title="Registration"/>
            <Scene key="Account" component={Account} title="Account Manager"/>
            <Scene key="Profile" component={Profile} title="Profile Manager"/>
          </Stack>
        </Router>
    );
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
