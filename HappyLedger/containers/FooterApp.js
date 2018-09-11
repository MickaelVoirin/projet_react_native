import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from "react-redux";
import { StyleSheet } from 'react-native';

class FooterApp extends Component {

  state = {
    numberNewNotifs : 0,
  }

  async componentDidMount(){
    this.getNotifs();
  }

  async componentWillReceiveProps(){
    this.getNotifs();
  }
  
  getNotifs(){
    let numberNewNotifs = 0;
      for(let valeur of this.props.notifications){
        if(valeur.new){
          numberNewNotifs++;
        }
      }
      this.setState({numberNewNotifs});
  }

  render() {
    return (
        <Footer>
          <FooterTab
            style={{backgroundColor:'#f2f2f2'}}
            tabBarTextColor='white'
          >

 {/* Bouton home */}
            <Button
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

{/* bouton notifications */}

            <Button
              style={{position:'relative'}}
              // style={{backgroundColor:'#a936c9'}}
              onPress={() => Actions.Notifications({update:Math.random(1000)})}
            >
              <Icon
                type='MaterialIcons'
                name="notifications"
                style={styles.icon}
              />
              {this.state.numberNewNotifs != 0 &&
              <Badge style={styles.badge}>
                <Text style={styles.badgeText}>{this.state.numberNewNotifs}</Text>
              </Badge>
              }
              <Text
                uppercase={false}
                style={styles.text}
              >Notifications</Text>
            </Button>

{/* Bouton autorisations */}

            <Button
              vertical
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
{/* Bouton profile */}
            <Button
              vertical
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



const mstp = state => ({
  notifications: state.notifications
});

export default connect(mstp, null)(FooterApp);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'raleway',
    paddingLeft: 1,
    paddingRight: 1,
    color: '#848484',
  },
  badge:{
    backgroundColor: '#b330c5', 
    position:'absolute',
    top:3,
    right:20,
    height:16
  },
  badgeText:{
    fontSize: 12, 
    lineHeight: 16, 
    height:16, 
    minWidth:11
  },
  icon: {
    color: '#848484',
  }
})