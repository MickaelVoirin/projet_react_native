import React from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base'
import HeaderApp from './HeaderApp';
import FooterApp from '../containers/FooterApp';

// Vue future : Inscription (Depuis Connexion)

export default class Registration extends React.Component {
  render() {
    return (
        <Container>
            <HeaderApp title={this.props.title}/>
            <Content>
                <Text>Registration page</Text>
            </Content>
            <FooterApp/>
        </Container>
    );
  }
}