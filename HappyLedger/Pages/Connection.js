import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FormInput, SocialIcon, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

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
      <View style={styles.container}>
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
          onChangeText={(username) => this.setState({username})}
        />
        <FormInput
          style={{width:200,height:50}}
          placeholder="Mot de Passe"
          onChangeText={(text) => this.setState({text})}
        />
        <Button
          onPress={(x) => x }
          rounded
          title="Se connecter"
          color='#a936c9'
          backgroundColor='white'
        />
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
          />
        </View>
      </View>
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
