import React, { Component } from 'react';
import { connect } from "react-redux";
import {getListOfForms} from '../actions/ListOfFormsActions';
import { Container, Header, Content, Title, Button, Left, Right, Body, Icon, Text, Spinner } from 'native-base';
import FooterApp from '../components/FooterApp';
import { Actions } from 'react-native-router-flux';
 
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
      <Button
      key={form.id}
      block
      info
      bordered
      onPress={() => Actions.Forms3({numberform: form.id, nameform: form.name, numberquestion: '1'})}
    >
      <Text
        uppercase={false}
      >{form.title}</Text>
    </Button>
    )}
  
    return (
      <Container>
        <Header
          style={{backgroundColor:'#a936c9'}}
        >
          <Left/>
          <Body>
            <Title>Profil</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => Actions.Account()}
            >
              <Icon type="FontAwesome" name='cog' />
            </Button>
          </Right>
        </Header>
        <Content
          style={{padding:10}}
        >
        { rendering }
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
