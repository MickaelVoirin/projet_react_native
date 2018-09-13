import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Header, Title, Button, Icon } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';

import { addNotifs } from '../actions/notification';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import urlAPI from '../urlAPI';
import { connect } from "react-redux";

class HeaderApp extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this._verifyNotifs();
  }

  // requete asynchrone vérifie les nouvelles notifications auprès du backend 
  _verifyNotifs() {
    const self = this;
    axios.post(`${urlAPI}notification/get_received`)
      .then(function (response) {
        const notificationsJsons = JSON.parse(response.data).items;
        const notificationsRedux = [...self.props.notifications]; 
        const notificationsStorage = [];
        let numberNewNotifs = 0;
        for(let valeurJsons of notificationsJsons){
          let temoin = true;
          for(let valeurRedux of notificationsRedux){
            if(valeurRedux._id === valeurJsons._id && valeurRedux.new != true){
                temoin = false; 
            } 
          }
          if(temoin){
            numberNewNotifs++;
          };
          valeurJsons['new'] = temoin;
          notificationsStorage.push(valeurJsons); 
        } 
        self.props.addNotifs(notificationsStorage);
        AsyncStorage.setItem('notifications', JSON.stringify(notificationsStorage));
      })
      .catch(function (error) {
        self.setState({err:true});
      });
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
  return bindActionCreators({addNotifs}, dispatch);
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
    width: 260,
    marginLeft: 50,
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
