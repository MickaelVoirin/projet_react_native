import React, {Component} from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon, ActionSheet } from 'native-base'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Image from 'react-native-scalable-image';
import { DocumentPicker, ImagePicker, Permissions } from 'expo';
import { bindActionCreators } from 'redux'; 
import { getMedia } from '../../actions';

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
        this.props.getMedia(result);
      }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      type: 'Images',
    });
    if (!result.cancelled) {
      this.props.getMedia(result);
    }
  };

  render() {
    
    const {media, nameform, numberquestion} = this.props; 
    
    let renderDocument;

    if (media != '' && media.type == 'image') {
      renderDocument = <Image source={{ uri: media.uri }} width={250} style={{marginTop:20, marginBottom:20}}/>;
    } else if (media != ''){
      if (media.name.match(/^.+\.pdf$/)){
        renderDocument =  <View style={styles.container}>
                            <Text style={styles.textBlock}>
                              <Icon style={styles.iconColor} type="FontAwesome" name="file-pdf-o" />
                            </Text>
                            <Text style={styles.textBlock}>{media.name}</Text>
                          </View>;
      } else if (media.name.match(/^.+\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)){
        renderDocument = <Image source={{ uri: media.uri }} width={250} style={{marginTop:20, marginBottom:20}}/>;
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
      { text: "Prendre une photo", icon: "camera", iconColor: "#2c8ef4", key: 'photo' },
      { text: "Images", icon: "images", iconColor: "#2c8ef4", key: 'image' },
      { text: "Documents", icon: "document", iconColor: "#f42ced", key: 'document' },
      { text: "Delete", icon: "trash", iconColor: "#fa213b" },
      { text: "Cancel", icon: "close", iconColor: "#25de5b" }
    ];
    const DESTRUCTIVE_INDEX = 3;
    const CANCEL_INDEX = 4;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom:20}}>
        <Button
          rounded
          fontFamily = 'raleway'
          backgroundColor='#a936c9'
          color='white'
          title="Sélectionnez un document"
          onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Choisissez un format"
              },
              buttonIndex => {
                if (BUTTONS[buttonIndex].key === 'image') {
                  this._pickImage()
                } else if (BUTTONS[buttonIndex].key === 'photo') {
                  Actions.Camera({nameform: nameform, numberquestion: numberquestion});
                } else { this._pickDocument() }
              }
            )}
        />
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
  media: state.media,
});

const mdtp = dispatch => {
  return bindActionCreators({getMedia}, dispatch);
}; 

export default connect(mapStateToProps, mdtp)(TakePicture);