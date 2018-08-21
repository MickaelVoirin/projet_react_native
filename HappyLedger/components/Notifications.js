import React from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base'
import HeaderApp from './HeaderApp';
import FooterApp from './FooterApp';

export default class Notifications extends React.Component {
  render() {
    return (
        <Container>
            <HeaderApp title={this.props.title}/>
            <Content>
                <Text>Page de notifications</Text>
            </Content>
            <FooterApp/>
        </Container>
    );
  }
}