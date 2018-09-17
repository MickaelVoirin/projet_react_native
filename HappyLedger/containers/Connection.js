import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FormInput, SocialIcon, Button } from 'react-native-elements';
import { Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo';
import { getUserLogin } from '../actions/UserLoginActions';
import { connect } from "react-redux";

// Vue connexion utilisateur : (lancement de l'application)

class Connection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {

    const { error, loading } = this.props;

    let rendering;

    if (error) {
      rendering = <Text style={styles.forgotPassword}>Email ou mot de passe invalide</Text>
    } else if (loading) {
      rendering = <Spinner color='white' />;
    }

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
          placeholder="Email"
          placeholderTextColor='white'
          inputStyle={{fontFamily:'raleway', color:'white', paddingLeft:10}}
          onChangeText={(email) => this.setState({email})}
        />
        <FormInput
          style={{width:200,height:50}}
          secureTextEntry
          placeholder="Mot de Passe"
          placeholderTextColor='white'
          inputStyle={{fontFamily:'raleway', color:'white', paddingLeft:10}}
          onChangeText={(password) => this.setState({password})}
        />
        { rendering }
        <View
          style={styles.connectButton}
        >
          <Button
            onPress={() => this.props.dispatch(getUserLogin(this.state.email,this.state.password))}
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

const mstp = state => ({
  loading: state.userLogin.loading,
  error: state.userLogin.error,
});

export default connect(mstp)(Connection);

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
