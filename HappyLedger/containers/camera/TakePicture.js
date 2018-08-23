import React, {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base'
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import Image from 'react-native-scalable-image';
import { DocumentPicker, FileSystem } from 'expo';
import {bindActionCreators} from 'redux'; 
import {getDocumentData} from '../../actions';

class TakePicture extends Component {
  
  constructor(props){
    super(props);
  }

  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync();
    console.log(result);

    if (!result.cancelled) {
      this.props.getDocumentData(result);
    }
  };

  render() {
    
    const {image, document, numberform, numberquestion} = this.props; 
    
    let renderDocument;
    if (document != ''){
      if (document.name.match(/^.+\.pdf$/)){
        renderDocument =  <View style={styles.container}>
                            <Text style={styles.textBlock}>
                              <Icon style={styles.iconColor} type="FontAwesome" name="file-pdf-o" />
                            </Text>
                            <Text style={styles.textBlock}>{document.name}</Text>
                          </View>;
      } else if (document.name.match(/^.+\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)){
        renderDocument = <Image source={{ uri: document.uri }} width={250} style={{marginTop:20, marginBottom:20}}/>;
      } else {
        renderDocument =  <View style={styles.container}>
                            <Text style={styles.textBlock}>
                              <Icon style={styles.iconColor} type="MaterialIcons" name="error-outline" />
                            </Text>
                            <Text style={styles.textBlock}>Ce type de document n'est pas supporté</Text>
                            <Text style={styles.textBlock}>Merci d'en sélectionner un autre</Text>
                          </View>;
      }
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          style={{marginTop:20}}
          color='#a936c9'
          title="Prendre une photo avec votre téléphone"
          onPress={() => Actions.Camera({numberform: numberform, numberquestion: numberquestion})}
        />
        <Button
          style={{marginTop:20}}
          color='#a936c9'
          title="chercher un document sur le téléphone"
          onPress={this._pickDocument}        />
        {image != '' &&
            <Image source={{ uri: image }} width={250} style={{marginTop:20, marginBottom:20}}/>
        }
        { renderDocument }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 300,
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 120,
    borderWidth: 1,
    borderColor: 'grey',
  },
  textBlock: {
    textAlign: 'center',
  },
  iconColor: {
    color: "grey",
  },
})

const mapStateToProps = (state) => ({
  image: state.camera,
  document: state.document,
});

const mdtp = dispatch => {
  return bindActionCreators({getDocumentData}, dispatch);
}; 

export default connect(mapStateToProps, mdtp)(TakePicture);