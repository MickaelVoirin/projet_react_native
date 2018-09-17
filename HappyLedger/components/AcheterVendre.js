import React from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base'
import HeaderApp from './HeaderApp';
import FooterApp from '../containers/FooterApp';

// Vue future : Acheter / Vendre  (Depuis Home)

export default class AcheterVendre extends React.Component {
  render() {
    return (
        <Container>
            <HeaderApp title={this.props.title}/>
            <Content>
                <Text>Page acheter/vendre</Text>
            </Content>
            <FooterApp/>
        </Container>
    );
  }
}