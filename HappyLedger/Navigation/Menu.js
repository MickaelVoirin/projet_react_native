import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class MyMenu extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      buttons : [
          {title : 'Cnx', color : '#841584', key : 'Connection'},
          {title : 'Inc', color : 'gray', key : 'Registration'},
          {title : 'Cpt', color : 'gray', key : 'Account'},
          {title : 'Pl', color : 'gray', key : 'Profile'},
          {title : 'Form', color : 'gray', key : 'Forms'},
          {title : 'FormB', color : 'gray', key : 'FormsBiss'},
          {title : 'ExS', color : 'gray', key : 'ExchangeSurvey'},
      ]
    };
  }

  componentDidMount(){
      const buttons = [...this.state.buttons];
      buttons.map(x => {
        x.color = (x.key === Actions.currentScene) ? '#841584': 'gray';
      });
      this.setState({buttons});
  }

  render () {
    const buttons = [...this.state.buttons];
    return (
        <View style={styles.container}>
          <View style={styles.navBar}>
          { buttons.map((x,i) =>
            <Button
                key={i}
                onPress={() => Actions[x.key].call()}
                title={x.title}
                color={x.color}
          />
          )}
          </View>
        </View>
    )
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  navBar: {
    flexDirection: 'row',
  },
});
