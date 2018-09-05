import React, {Component} from 'react';
import { Platform, Button, View, Text, StyleSheet } from 'react-native';
import { Icon, ActionSheet } from 'native-base'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Image from 'react-native-scalable-image';
import { DocumentPicker, ImagePicker, Permissions } from 'expo';
import { bindActionCreators } from 'redux'; 
import { getDocumentData } from '../../actions';

class TakePicture extends Component {
  
  constructor(props){
    super(props);
  }

  state = {
    permissionsGranted: false,
  };

  async componentWillMount() {
    if (Platform.OS === 'ios') {
      // TODO => a reduxer
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      this.setState({ permissionsGranted: status === 'granted' });
    }
    
  }

  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync();
      if (result.type != 'cancel') {
        this.props.getDocumentData(result);
      }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      type: 'Images',
    });
    if (!result.cancelled) {
      this.props.getDocumentData(result);
    }
  };

  render() {
    
    const {image, document, nameform, numberquestion} = this.props; 
    
    let renderDocument;

    if (document != '' && document.type == 'image') {
      renderDocument = <Image source={{ uri: document.uri }} width={250} style={{marginTop:20, marginBottom:20}}/>;
    } else if (document != ''){
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

    const BUTTONS = [
      { text: "Images", icon: "images", iconColor: "#2c8ef4" },
      { text: "Documents", icon: "document", iconColor: "#f42ced" },
      { text: "Delete", icon: "trash", iconColor: "#fa213b" },
      { text: "Cancel", icon: "close", iconColor: "#25de5b" }
    ];
    const DESTRUCTIVE_INDEX = 2;
    const CANCEL_INDEX = 3;

    let renderButton;
    if (Platform.OS === 'ios') {
      renderButton =  <Button
                        style={styles.camera}
                        color='#a936c9'
                        title="Choisir une photo existante"
                        onPress={() =>
                          ActionSheet.show(
                          {
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            destructiveButtonIndex: DESTRUCTIVE_INDEX,
                            title: "Choisissez un format"
                          },
                          buttonIndex => {
                            if (BUTTONS[buttonIndex].icon === 'images') {
                              this._pickImage()
                            } else { this._pickDocument() }
                          }
                          )}
                        /> 
    } else {
      renderButton =  <Button
                        style={{marginBottom : 200}}
                        color='#a936c9'
                        title="Choisir une photo existante"
                        onPress={this._pickDocument}
                      />
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          style={styles.camera}
          color='#a936c9'
          title="Prendre une photo"
          onPress={() => Actions.Camera({nameform: nameform, numberquestion: numberquestion})}
        />
        { renderButton }
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
  camera : {
    marginBottom: 20,
    marginTop : 10,
  }
})

const mapStateToProps = (state) => ({
  image: state.camera,
  document: state.document,
});

const mdtp = dispatch => {
  return bindActionCreators({getDocumentData}, dispatch);
}; 

export default connect(mapStateToProps, mdtp)(TakePicture);