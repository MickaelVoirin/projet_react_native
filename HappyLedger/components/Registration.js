import React from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base'
import HeaderApp from './HeaderApp';
import FooterApp from './FooterApp';

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