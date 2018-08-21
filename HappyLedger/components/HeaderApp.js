import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Header, Title, Button, Icon } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';

export default class HeaderApp extends Component {

  constructor(props) {
    super(props);
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

          <Title style={styles.title}>{this.props.title}</Title>

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

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  gradientContainer: {
    position: 'absolute',
    width: win.width,
    top: 0,
    height: 64,
  },
  title: {
    color: 'white',
    marginTop: 10,
    fontSize: 30,
    fontFamily:'raleway',
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
