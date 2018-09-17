import React from 'react';
import { Container, View, Text, Button } from 'native-base';
import { Image } from 'react-native';
import HeaderApp from '../../components/HeaderApp';
import FooterApp from '../FooterApp';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'; 
import {getMedia} from '../../actions'

// Visualisation et validation de la photo après l'avoir prise depuis la camera

class CamPicture extends React.Component{

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
                title="Oui"
                onPress={() => this.validPicture()}
              >
                <Text style={{color:'black'}}>OUI</Text>
              </Button>
              <Button
                transparent
                title="Non"
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

