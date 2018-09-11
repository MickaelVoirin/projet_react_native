import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container, H2, Button, View, Card, Text, Item, Input, Textarea } from 'native-base';
import CheckboxList from '../components/forms/CheckboxList'
import RadioList from '../components/forms/RadioList'
import DatePickers from '../components/forms/DatePickers'
import RangeList from '../components/forms/RangeList'
import TakePicture from '../containers/camera/TakePicture'
import HeaderApp from '../components/HeaderApp';
import FooterApp from './FooterApp';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';

class Forms extends Component {

  constructor(props) {
    super(props)
  }
  
  state = {
    questions: undefined,
  }

async _receivedProps(numberquestion) {
  const questions = this.props.listOfQuestions[this.props.nameform][numberquestion];
  
  this.setState({questions});
}

  async componentDidMount(){
    await this._receivedProps(this.props.numberquestion);
  }

  async componentWillReceiveProps(nextProps){
    await this._receivedProps(nextProps.numberquestion);
  }

  render() {
    let label = '';
    let name = '';
    let choices = '';
    let type = '';
    const obj = this.state.questions;

    if (obj) {
      label = obj.label;
      name = obj.question.name;
      category = obj.question.category;
      choices = obj.question.choices;
      type = obj.question.type
    }
 

    return (
      <Container> 
      <HeaderApp title={this.props.company}/>
      <ScrollView style={styles.scrollview}>
        { (!obj) 
          ? <Text style={styles.titleH1} onPress={() => Actions.Forms ({numberform: '1', numberquestion: '1'})}>
              Aller au questionnaire numero 1
            </Text>
          :
          <View>  
            <Card style={styles.card}>
                <H2 style={styles.H2}>{name}</H2>
                <Text style={styles.question}>"{label}"</Text>
                <View style={styles.field}>
                {( () => {
                  switch(type) {
                      case 'string':
                        return <Item><Input placeholder='Saisissez votre réponse' /></Item>;
                      case 'textarea':
                        return <Textarea style={{width:'100%'}} rowSpan={5} bordered placeholder='Saisissez votre réponse'/>;
                      case 'checkbox':  
                        return <CheckboxList answers={choices}/>
                      case 'radio':  
                        return <RadioList answers={choices}/>
                      case 'date' : 
                        return <DatePickers />       
                      case 'ranges' : 
                        return <RangeList minmax={choices}/>
                      case 'file':
                        return <TakePicture nameform={this.props.nameform} numberquestion={this.props.numberquestion}/>
                      default:
                        return '';
                  }
                  })()}
                </View>
            </Card>
            <View style={styles.viewButtons}>
            {this.props.numberquestion > 0 &&
               <Button style={styles.buttonLeft} rounded onPress={() => Actions.Forms({nameform: this.props.nameform, numberquestion: this.props.numberquestion -1})}>
                <Text uppercase={false} style={{color:'black', fontFamily:'raleway'}}>Précédent</Text>
              </Button>
            }
            { this.props.numberquestion !== this.props.listOfQuestions[this.props.nameform].length -1
             ? <Button style={styles.buttonRight} rounded bordered onPress={() => Actions.Forms({nameform: this.props.nameform, numberquestion: this.props.numberquestion +1})}>
               <Text uppercase={false} style={{color:'black', fontFamily:'raleway'}}>Suivant</Text>
               </Button>
            : <Button style={styles.buttonRight} rounded onPress={() => Actions.Profile()}>
               <Text uppercase={false} style={{color:'black', fontFamily:'raleway'}}>Valider</Text>
              </Button>
            }
            </View>
          </View> 
        }
      </ScrollView>
      <FooterApp/>
      </Container>
    ); 
  } 
}

const mstp = state => ({
  listOfQuestions : state.addForms,
})

export default connect(mstp)(Forms);

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#fff',
    paddingRight:10,
    paddingLeft:10,
  },
  question:{
    height:40,
    borderBottomWidth:1,
    borderBottomColor:'#D1D5DA',
    fontSize:16,
    marginTop:15,
    marginBottom: 10,
    textAlign: 'center'
  },
  field:{
    marginTop:1,
  },
  buttonLeft:{
    backgroundColor: '#FFFFFF',
    position:'absolute', 
    top:20,
    left:0,
    marginLeft:20,
    shadowColor: '#222',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
  },
  buttonRight:{
    // backgroundColor: '#FFFFFF',
    position:'absolute', 
    top:20,
    right:0,
    marginRight:20,
    shadowColor: '#222',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
  },
  viewButtons :{ 
    minHeight: 80,
    flexDirection: "row", 
    flex: 1, 
    position: "relative", 
    top: 15,  
    padding: 10,
    marginBottom: 40, 
    paddingTop : 80,
  }, 
  viewForm : {
    width: "100%"
  },
  title : {
    fontSize : 12,
    paddingTop : 15,
  },
  H2 : {
    textAlign: 'center',
    marginTop: 20
  },
  reponse : {
   marginBottom: 15,
   marginLeft : 10
  }
  
});