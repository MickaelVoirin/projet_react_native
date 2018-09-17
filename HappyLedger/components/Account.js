import React from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base'
import HeaderApp from './HeaderApp';
import FooterApp from '../containers/FooterApp';

// Vue future : Gestion de compte (Depuis HeaderApp)

export default class Account extends React.Component {
  render() {
    return (
        <Container>
            <HeaderApp title={this.props.title}/>
            <Content>
                <Text>Gestion de compte</Text>
            </Content>
            <FooterApp/>
        </Container>
    );
  }
}
