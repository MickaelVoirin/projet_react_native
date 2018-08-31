import React, { Component } from 'react';
import { Container, Content, Right, Body, Icon, Text, Spinner, ListItem, Separator } from 'native-base';
import { StyleSheet } from 'react-native';
import FooterApp from '../components/FooterApp';
import { Actions } from 'react-native-router-flux';
import HeaderApp from '../components/HeaderApp';
import axios from 'axios';

import { Alert, AsyncStorage } from "react-native";
import urlAPI from '../urlAPI';

class Profile extends Component {
  

  state = {
    listOfForms : [],
    isReady : false,
    err: false
  }

  async componentDidMount() { 
    await this._loadJsonsElementsAsync();
    await this._saveStrorageAsync();
    this.setState({isReady:true});
  }

  async _saveStrorageAsync(){
     try{ 
      await AsyncStorage.setItem('listOfForms', JSON.stringify(this.state.listOfForms));
      this.state.listOfForms.forEach( x => {
        AsyncStorage.setItem(x.name, JSON.stringify(x.elements));
      });
    } catch(error){
      this.setState({err:false});
    }
  }

  async _loadJsonsElementsAsync() {
    
      // Received Notifications (Future : via async storage)
      const getIdNotifs = ['notif_1','notif_2', 'notif_3'];

      const self = this;
      for(let i of getIdNotifs){
        await axios.post(`${urlAPI}kyc/form/${i}`)
        .then(function (response) {
          const form = JSON.parse(response.data);
          const listOfForms = [...self.state.listOfForms]
          listOfForms.push({'id':form['_id'],'name':form['name'],'title':form['company'], 'elements':form['items']});
          self.setState({listOfForms})               
        })
        .catch(function (error) {
          self.setState({err:true});
        });
      }
      
      
  }

  render() {
    
    const { error, loading, listOfForms } = this.props;
    let rendering = '';
    
    if (this.state.err) {
      rendering =  <Text>Une erreur est survenue dans le traitement de votre demande.</Text>;
    } 
    else if(!this.state.isReady){
      rendering = <Spinner color='#a936c9' />;
    } 
    else {

      rendering = this.state.listOfForms.map(form =>
      <ListItem
      key={form.id}
      onPress={() => Actions.Forms({nameform: form.name, numberquestion: 1})}
    >
    <Body>
      <Text
        uppercase={false}
        style={styles.text}
      >{form.title}</Text>
      </Body>
      <Right>
        <Icon type="MaterialIcons" name="keyboard-arrow-right"/>
      </Right>
    </ListItem>
    )}
  
    return (
      <Container>
        <HeaderApp title={this.props.title}/>
        <Content
          style={{padding:10}}
        >
         <Separator 
         bordered
         style={styles.separator}>
            <Text>A COMPLETER</Text>
          </Separator>

        { rendering }

        <Separator 
        bordered
        style={styles.separatorComplet}>
            <Text>COMPLET</Text>
          </Separator>

        </Content>
        <FooterApp/>
      </Container>
    );
  }
}


export default Profile;

const styles = StyleSheet.create({
  separator: {
    marginTop: 2,
    marginBottom: 2,
  },
  separatorComplet : {
    marginTop: 2,
  },
  text: {
    fontFamily:'raleway',
  }
});
