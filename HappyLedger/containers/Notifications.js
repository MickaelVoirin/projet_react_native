import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Right, Body, Icon, Text, ListItem, Separator, Spinner } from 'native-base'
import HeaderApp from '../components/HeaderApp';
import FooterApp from './FooterApp';
import { Actions } from 'react-native-router-flux';
import { connect } from "react-redux";
import urlAPI from '../urlAPI';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { updateNotifs } from '../actions/notification';
import { Alert, AsyncStorage } from "react-native";

class Notifications extends React.Component {
  
  state = {
    listOfForms : false,
    isReady : false,
    newNotifs : false,
    mount:false
  }

  async componentDidMount(){
    await this._loadNewNotifs();
    await this._loadJsonsElementsAsync();
    await this.props.updateNotifs();
    
    this.setState({isReady:true});
  }
  
  async componentDidUpdate(){
    if(this.state.isReady == true){
      await AsyncStorage.setItem('notifications', JSON.stringify(this.props.notifications));
    }
  }

  async componentWillReceiveProps(){
      
      await this._loadNewNotifs();
      await this._loadJsonsElementsAsync();
    if(this.state.newNotifs.length != 0){
      await this.props.updateNotifs();
    }
  }

  async _loadNewNotifs(){
    const notificationsRedux = [...this.props.notifications];
    const newNotifs = notificationsRedux.filter( (obj) => obj.new === true).map( (obj) => obj._id );
    this.setState({newNotifs});
  }

  async _loadJsonsElementsAsync() {
    
    const self = this;
    this.setState({listOfForms:false});
    const listOfForms = [];
    for(let i of this.state.newNotifs){
      await axios.post(`${urlAPI}kyc/form/${i}`)
      .then(function (response) {
        const form = JSON.parse(response.data);
        listOfForms.push({'id':form['_id'],'name':form['name'],'title':form['company'], 'elements':form['items']});
        self.setState({listOfForms})               
      })
      .catch(function (error) {
        self.setState({err:true});
      });
    }
    
  }


  render() {
    return (
        <Container>
            <HeaderApp title={this.props.title}/>
            <Content
              style={{padding:10}}
            >
              <Separator 
              bordered
              style={styles.separator}>
                <Text>NOUVEAUX FORMULAIRES</Text>
              </Separator>
              {!this.state.isReady ? (
                <Spinner color='#a936c9' />
              ) : (
              !this.state.listOfForms ? (
                <Text>Pas de nouveaux formulaires</Text>
              ) : (
                this.state.listOfForms.map(form => {
                  return <ListItem
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
                })
              )
            )} 
            
            </Content>
            <FooterApp />
        </Container>
    );
  }
}
const mstp = state => ({
  notifications: state.notifications
});

const mdtp = (dispatch) => {
  return bindActionCreators({updateNotifs}, dispatch);
};

export default connect(mstp, mdtp)(Notifications);

const styles = StyleSheet.create({
  separator: {
    marginTop: 2,
    marginBottom: 2,
  }
});