import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Content, Separator } from 'native-base'
import HeaderApp from '../components/HeaderApp';
import FooterApp from './FooterApp';
import { connect } from "react-redux";

class Notifications extends React.Component {
  
  state = {
    newNotifs: false,
  }

  componentDidMount(){
    const notificationsRedux = [...this.props.notifications];
    const newNotifs = notificationsRedux.filter( (obj) => obj.new === true);
    this.setState({newNotifs});
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
              {!this.state.newNotifs ? (
                <Text>Pas de nouveaux formulaires</Text>
              ) : (
                
                this.state.newNotifs.map(form => <Text key={form._id}>{form.company}</Text>
                  /*<ListItem
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
                  */
                  )
              )}
              
            
            </Content>
            <FooterApp/>
        </Container>
    );
  }
}
const mstp = state => ({
  notifications: state.notifications
});

export default connect(mstp)(Notifications);

const styles = StyleSheet.create({
  separator: {
    marginTop: 2,
    marginBottom: 2,
  }
});