import React from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base'
import HeaderApp from './HeaderApp';
import FooterApp from '../containers/FooterApp';

export default class Recherche extends React.Component {
  render() {
    return (
        <Container>
            <HeaderApp title={this.props.title}/>
            <Content>
                <Text>Page de recherche</Text>
            </Content>
            <FooterApp/>
        </Container>
    );
  }
}