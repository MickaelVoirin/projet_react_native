import React from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base'
import HeaderApp from './HeaderApp';
import FooterApp from '../containers/FooterApp';

// Vue future : Assurance Vie  (Depuis Home)

export default class AssuranceVie extends React.Component {
  render() {
    return (
        <Container>
            <HeaderApp title={this.props.title}/>
            <Content>
                <Text>Page assurance vie</Text>
            </Content>
            <FooterApp/>
        </Container>
    );
  }
}