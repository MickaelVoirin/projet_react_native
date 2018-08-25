import React, { Component } from 'react';
import { connect } from "react-redux";
import {getListOfForms} from '../actions/ListOfFormsActions';
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
    listOfForms : 'default'
  }

  componentWillMount(){
    this._loadAssetsAsync();
  }

  componentDidMount() { 
    this.props.dispatch(getListOfForms());
  }

  componentDidUpdate(){
     this._loadtest();
  }

  async _loadtest(){
    await AsyncStorage.setItem('listOfForms', JSON.stringify(this.state.listOfForms));
    this.state.listOfForms.forEach( x => {
      // alert(JSON.stringify(x.elements));
      AsyncStorage.setItem(x.name, JSON.stringify(x.elements));
    });
    
  }

  async _loadAssetsAsync() {
    
    
      const self = this;
      axios.post(`${urlAPI}kyc/get_form`)
      .then(function (response) {
        const listOfForms = [];
        const allFormsJson = JSON.parse(response.data);
        try {
          
          // alert(allFormsJson['askFor'])
          const allForms = [];
          for (let key in allFormsJson['askFor']) {
            
            if(Array.isArray(allFormsJson['askFor'][key])){
              // await AsyncStorage.setItem(key, JSON.stringify(allFormsJson['askFor'][key]));
              let title = key.split('_').map(x => x.charAt(0).toUpperCase() + x.slice(1) ).join(' ');
              listOfForms.push({'id':key,'name':key,'title':title, 'elements':allFormsJson['askFor'][key]});
            }
          }  
          self.setState({listOfForms})        
          // await AsyncStorage.setItem('listOfForms', JSON.stringify(listOfForms));
        } 
        catch (error) {
          Alert.alert(error.message);
        }   
          
      
      })
      .catch(function (error) {
        Alert.alert(error.message);
      });

      //this.setState({listOfForms : 'qsdsqddsqqsdqsdMMMM' });

  }

  render() {
    
    const { error, loading, listOfForms } = this.props;
    let rendering = '';

    if (error) {
      rendering =  <Text>Une erreur est survenue dans le traitement de votre demande.</Text>;
    } else if (loading) {
      rendering = <Spinner color='#a936c9' />;
    } else {

      rendering = listOfForms.map(form =>
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


const mstp = state => ({
  listOfForms: state.listOfForms.items,
  loading: state.listOfForms.loading,
  error: state.listOfForms.error
});

export default connect(mstp)(Profile);

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
