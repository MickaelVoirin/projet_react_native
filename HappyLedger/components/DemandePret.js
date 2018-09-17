import React from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base'
import HeaderApp from './HeaderApp';
import FooterApp from '../containers/FooterApp';

// Vue future : Demande de prêt  (Depuis Home)

export default class DemandePret extends React.Component {
  render() {
    return (
        <Container>
            <HeaderApp title={this.props.title}/>
            <Content>
                <Text>Page demande de prêt</Text>
            </Content>
            <FooterApp/>
        </Container>
    );
  }
}