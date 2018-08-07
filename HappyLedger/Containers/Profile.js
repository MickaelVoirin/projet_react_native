import React from 'react';
import { Container, Header, Content, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import FooterApp from './FooterApp'
import { Alert, AsyncStorage } from 'react-native'
import { AppLoading } from 'expo';
export default class Profile extends React.Component {
  state = {
    'listOfForms': [],
    'isReady': false,
 }

  componentDidMount() { 
      this._retrieveData(); 
  }

  _retrieveData = async () => {

    let listOfFormsPromises = await AsyncStorage.getItem('listOfForms');
    Alert.alert(listOfFormsPromises);
  }
  
  render() {
    if (this.state.isReady) {
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
          { this.state.listOfForms.map( form => {

            <Button
              block
              info
              bordered
              onPress={() => Actions.Forms3({numberform: '1', numberquestion: '1'})}
            >
            <Text
              uppercase={false}
            >{form.title}</Text>
            </Button>

          })}
          {/* <Button
            block
            info
            bordered
            onPress={() => Actions.Forms3({numberform: '1', numberquestion: '1'})}
          >
            <Text
              uppercase={false}
            >{this.state.form1.title}</Text>
          </Button>
          <Button 
            block
            info
            bordered
            style={{marginTop:10}}
            onPress={() => Actions.Forms3({numberform: '2', numberquestion: '1'})}
          >
            <Text
              uppercase={false}
            >Formulaire 2</Text>
          </Button>
          <Button
            block
            success
            style={{marginTop:10}}
            onPress={(x) => x}
          >
            <Text
              uppercase={false}
            >Formulaire BNP Paribas</Text>
          </Button> */}
        </Content>
        <FooterApp/>
      </Container>
    );
  }else {
    return <AppLoading />;
  }
  }
}
