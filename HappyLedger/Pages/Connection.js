import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FormInput, SocialIcon, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo';


export default class Connection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  render() {
    return (
      <LinearGradient
        colors={['#3c76eb', '#b330c5']}
        style={styles.container}
        start={[0,0]}
        end={[1,1]}
      >
        <View style={styles.logo_block}>
          <Image
            source={require('../assets/images/happy-ledger-logo-white.png')}
            resizeMode="center"
          />
        </View>
        <View style={styles.form}>
          <FormInput
          style={{width:200,height:50}}
          placeholder="Nom d'utilisateur"
          inputStyle={{fontFamily:'raleway'}}
          onChangeText={(username) => this.setState({username})}
        />
        <FormInput
          style={{width:200,height:50}}
          secureTextEntry
          placeholder="Mot de Passe"
          inputStyle={{fontFamily:'raleway'}}
          onChangeText={(text) => this.setState({text})}
        />
        <View
          style={styles.connectButton}
        >
          <Button
            onPress={() => Actions.Home()}
            rounded
            title="Se connecter"
            color='#a936c9'
            backgroundColor='white'
            fontFamily = 'raleway'
          />
        </View>

        <Text
          style={styles.forgotPassword}
        >
          Mot de passe oublié ?
        </Text>
        </View>
        <View style={styles.social_auth}>
          <SocialIcon
            type='facebook'
            iconColor='#a936c9'
            style={{backgroundColor:'white',}}
          />
          <SocialIcon
            type='google'
            iconColor='#a936c9'
            style={{backgroundColor:'white',}}
          />
          <SocialIcon
            type='twitter'
            iconColor='#a936c9'
            style={{backgroundColor:'white',}}
          />
          <SocialIcon
            type='linkedin'
            iconColor='#a936c9'
            style={{backgroundColor:'white',}}
          />
        </View>
        <View style={styles.create_account_button}>
          <Button
            onPress={() => Actions.Registration()}
            rounded
            title="Créer un compte"
            color='white'
            outline
            fontFamily = 'raleway'
          />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a936c9',
  },
  logo_block: {
    flex: 2,
    padding:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
  },
  form: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectButton: {
    marginTop:20,
  },
  forgotPassword: {
    marginTop: 20,
    fontFamily: 'raleway',
    color: 'white',
  },
  social_auth: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  create_account_button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
