import React from 'react';
import { Container, Content, View, Text, Header, Left, Right, Button, Icon, Title, Body } from 'native-base';
import { Image } from 'react-native';
import HeaderApp from '../../components/HeaderApp';
import FooterApp from '../FooterApp';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'; 
import {getMedia} from '../../actions'

class CamPicture extends React.Component{
  
  constructor(props){
    super(props);
  }

// validation de la photo, renvoi vers le formulaire
  validPicture(){
    this.props.getMedia(this.props.media);
    Actions.Forms({nameform: this.props.nameform, numberquestion: this.props.numberquestion});
  }

  render(){
    const {media} = this.props; 
    return (
      <Container>
        <HeaderApp title={this.props.title}/>
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
                onPress={() => Actions.Forms({nameform: this.props.nameform, numberquestion: this.props.numberquestion})}
              >
                <Text style={{color:'black'}}>NON</Text>
              </Button>
            </View>
            <Image source={{ uri: media.uri }} style={{width:'70%', height:'70%'}} />
        </View>
        <FooterApp/>
      </Container>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({getMedia}, dispatch);
}; 

export default connect(null, mapDispatchToProps)(CamPicture); 

