import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class FooterApp extends Component {
  render() {
    return (
        <Footer>
          <FooterTab
            style={{backgroundColor:'#a936c9'}}
            tabBarTextColor='white'
          >
            <Button
              vertical
              active
              style={{backgroundColor:'#a936c9'}}
            >
              <Icon
                type='FontAwesome'
                name="home"
              />
              <Text
                uppercase={false}
                style={{fontFamily:'raleway'}}
              >Home</Text>
            </Button>
            <Button
              vertical
              style={{backgroundColor:'#a936c9'}}
            >
              <Icon
                type='FontAwesome'
                name="bell"
              />
              <Text
                uppercase={false}
                style={{fontFamily:'raleway'}}
              >Notifications</Text>
            </Button>
            <Button
              vertical
              style={{backgroundColor:'#a936c9'}}
              onPress={() => Actions.ExchangeSurvey()}
            >
              <Icon
                type='FontAwesome'
                name="check" />
                <Text
                  uppercase={false}
                  style={{fontFamily:'raleway'}}
                >Autorisations</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
