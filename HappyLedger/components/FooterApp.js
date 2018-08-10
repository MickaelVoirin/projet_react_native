import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';

export default class FooterApp extends Component {
  render() {
    return (
        <Footer>
          <FooterTab
            style={{backgroundColor:'#f2f2f2'}}
            tabBarTextColor='white'
          >

 {/* BUTTON HOME */}
            <Button
              // style={{backgroundColor:'#a936c9'}}
              onPress={() => Actions.Home()}
            >
              <Icon
                type='FontAwesome'
                name="home"
                style={styles.icon}
              />
              <Text
                uppercase={false}
                style={styles.text}
              >Home</Text>
            </Button>

{/* FIN DU BUTTON HOME */}

            <Button
              // style={{backgroundColor:'#a936c9'}}
            >
              <Icon
                type='MaterialIcons'
                name="notifications"
                style={styles.icon}
              />
              <Text
                uppercase={false}
                style={styles.text}
              >Notifications</Text>
            </Button>

{/* FIN BUTTON NOTIF */}

            <Button
              vertical
              // style={{backgroundColor:'#a936c9'}}
              onPress={() => Actions.ExchangeSurvey()}
            >
              <Icon
                type='FontAwesome'
                name="check"
                style={styles.icon}
              />
                <Text
                  uppercase={false}
                  style={styles.text}
                >Autorisations</Text>
            </Button>

{/* FIN BUTTON AUTORISATION */}

              <Button
              vertical
              // style={{backgroundColor:'#a936c9'}}
              onPress={() => Actions.Profile()}
            >
              <Icon
                type='FontAwesome'
                name="user"
                style={styles.icon}
              />
                <Text
                style={styles.text}
                  uppercase={false}
                >Profil</Text>
            </Button>


          </FooterTab>
        </Footer>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'raleway',
    paddingLeft: 1,
    paddingRight: 1,
    color: '#848484',
  },
  icon: {
    color: '#848484',
  }
})
