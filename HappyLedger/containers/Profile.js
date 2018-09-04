import React, { Component } from 'react';
import { Container, Content, Right, Body, Icon, Text, Spinner, ListItem, Separator } from 'native-base';
import { StyleSheet } from 'react-native';
import FooterApp from '../components/FooterApp';
import { Actions } from 'react-native-router-flux';
import HeaderApp from '../components/HeaderApp';
import axios from 'axios';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addForms} from '../actions/AddForms';

import { Alert, AsyncStorage } from "react-native";
import urlAPI from '../urlAPI';

class Profile extends Component {
  constructor(props){
    super(props);
  }

  state = {
    listOfForms : [],
    isReady : false,
    err: false
  }

  async componentDidMount() { 
    await this._loadJsonsElementsAsync();
    await this._saveStrorageAsync();
    //alert(JSON.stringify(this.state.listOfForms));
    //alert(JSON.stringify(this.props.listOfQuestions[0]))
    this.setState({isReady:true});
  }

  async _saveStrorageAsync(){
     try{ 
      await AsyncStorage.setItem('listOfForms', JSON.stringify(this.state.listOfForms));
        this.props.addForms(this.state.listOfForms);
    } catch(error){
      this.setState({err:false});
    }
  }

  async _loadJsonsElementsAsync() {
    
      // Received Notifications (Future : via async storage)
      const getIdNotifs = ['troncommun','notif_1','notif_2', 'notif_3'];

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
      onPress={() => Actions.Forms({nameform: form.name, numberquestion: 0})}
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


const mdtp = dispatch => {
  return bindActionCreators({addForms}, dispatch);
}


export default connect(null, mdtp)(Profile);

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
