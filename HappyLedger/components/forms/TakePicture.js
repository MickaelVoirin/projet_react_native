import React, {Component} from 'react';
import { Button, Image, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';

class TakePicture extends Component {
  
  constructor(props){
    super(props);
  }

  render() {
    
    const {image, numberform, numberquestion} = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          style={{marginTop:20}}
          title="Prendre une photo avec votre téléphone"
          onPress={() => Actions.Camera({numberform: numberform, numberquestion: numberquestion})}
        />
        {image != '' &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }

}

const mapStateToProps = (state) => ({
  image: state.camera,
});


export default connect(mapStateToProps)(TakePicture);