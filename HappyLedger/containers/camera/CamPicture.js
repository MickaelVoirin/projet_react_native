import React from 'react';
import { Container, Content, View, Text, Header, Left, Right, Button, Icon, Title, Body } from 'native-base';
import { Image } from 'react-native';
import FooterApp from '../../Pages/FooterApp'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'; 
import {cameraTakeUri} from '../../actions'

class CamPicture extends React.Component{
  
  constructor(props){
    super(props);
  }
  
  validPicture(){
    this.props.cameraTakeUri(this.props.image);
    Actions.Forms({numberform: this.props.numberform, numberquestion: this.props.numberquestion});
  }

  render(){
    const {image} = this.props; 
    return (
      <Container>
        <Header
          style={{backgroundColor:'#a936c9'}}
        >
          <Left>
            <Button 
              transparent
              onPress={() => Actions.Camera()}
            >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Camera</Title>
          </Body>
          <Right>

            <Button
              transparent
              onPress={() => Actions.Forms()}
            >
              <Icon type="FontAwesome" name='cog' />
            </Button>
          </Right>
        </Header>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{marginBottom:20}}>Souhaitez vous valider cette photo ?</Text>
            <View style={{flexDirection: 'row', marginBottom:20}}>
              <Button
                transparent
                title="Non"
                onPress={() => this.validPicture()}
              >
                <Text style={{color:'black'}}>OUI</Text>
              </Button>
              <Button
                transparent
                title="Oui"
                onPress={() => Actions.Forms({numberform: this.props.numberform, numberquestion: this.props.numberquestion})}
              >
                <Text style={{color:'black'}}>NON</Text>
              </Button>
            </View>
            <Image source={{ uri: image }} style={{width:'70%', height:'70%'}} />
        </View>
        <FooterApp/>
      </Container>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({cameraTakeUri}, dispatch);
}; 

export default connect(null, mapDispatchToProps)(CamPicture); 

