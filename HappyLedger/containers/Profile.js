import React, { Component } from 'react';
import { connect } from "react-redux";
import {getListOfForms} from '../actions/ListOfFormsActions';
import { Container, Content, Right, Body, Icon, Text, Spinner, ListItem, Separator } from 'native-base';
import { StyleSheet } from 'react-native';
import FooterApp from '../components/FooterApp';
import { Actions } from 'react-native-router-flux';
import HeaderApp from '../components/HeaderApp';

 
class Profile extends Component {

  componentDidMount() {
    this.props.dispatch(getListOfForms());
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
      onPress={() => Actions.Forms({numberform: form.id, nameform: form.name, numberquestion: '1'})}
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
        <HeaderApp/>
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
