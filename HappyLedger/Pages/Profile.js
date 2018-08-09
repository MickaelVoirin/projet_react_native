import React from 'react';
import { Container, Header, Content, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import FooterApp from './FooterApp'


export default class Profile extends React.Component {
  render() {
    return (
      <Container>

{/* HEADER         */}
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

{/* FIN DU HEADER  */}

        <Content
          style={{padding:10}}
        >
          <Button
            block
            info
            bordered
            onPress={() => Actions.Forms({numberform: '1', numberquestion: '1'})}
          >
            <Text
              uppercase={false}
            >Formulaire 1</Text>
          </Button>
          <Button 
            block
            info
            bordered
            style={{marginTop:10}}
            onPress={() => Actions.Forms({numberform: '2', numberquestion: '1'})}
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
          </Button>
        </Content>
        <FooterApp/>
      </Container>
    );
  }
}
