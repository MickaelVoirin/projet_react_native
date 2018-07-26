import React, { Component } from 'react';
import { Container, Content, Button, Text, Left } from "native-base";

class SendPartnAuth extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Content>
          <Left>
            <Text>John Doe</Text>
            <Button style={{ backgroundColor: '#a936c9' }} rounded>
              <Text>Envoyer la demande</Text>
            </Button>
            <Text>Allan Smithy</Text>
            <Button style={{ backgroundColor: '#a936c9' }} rounded>
              <Text>Envoyer la demande</Text>
            </Button>
          </Left>
        </Content>
      </Container>
    )
  }
}

export default SendPartnAuth