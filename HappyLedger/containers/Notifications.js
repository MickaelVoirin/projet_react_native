import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Right, Body, Icon, Text, ListItem, Separator, Spinner } from 'native-base'
import HeaderApp from '../components/HeaderApp';
import FooterApp from './FooterApp';
import { Actions } from 'react-native-router-flux';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { notifsNotNew } from '../actions/notification';
import { Alert, AsyncStorage } from "react-native";

class Notifications extends React.Component {
  
  state = {
    listOfForms : false,
    isReady : false,
    newNotifs : false,
    mount:false,
    count:0
  }

  

  async componentDidMount() { 
      await this._checkNotifs();
      
      await AsyncStorage.setItem('notifications', JSON.stringify(this.props.notifications));
      if(this.state.listOfForms){
        await this.props.notifsNotNew(this.props.notifications);
      }
      this.setState({isReady:true,mount:true});
    
  }


async componentWillReceiveProps(nextProps){
     
    if(this.state.mount && this.props.update != nextProps.update){
        this.setState({isReady:false});
        await this._checkNotifs();
        await AsyncStorage.setItem('notifications', JSON.stringify(this.props.notifications));
        
        if(this.state.listOfForms){
          await this.props.notifsNotNew(this.props.notifications);
        } 
        this.setState({isReady:true});
    } 
} 

  _checkNotifs(){
      
      let listOfForms = this.props.notifications.filter( (obj) => {
        return obj.new === true
      });
      if(listOfForms.length == 0){
        listOfForms = false;
      }
      
    this.setState({listOfForms,count:this.props.notifications.length});
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
                    key={form._id}
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
  return bindActionCreators({notifsNotNew}, dispatch);
};

export default connect(mstp, mdtp)(Notifications);

const styles = StyleSheet.create({
  separator: {
    marginTop: 2,
    marginBottom: 2,
  }
});