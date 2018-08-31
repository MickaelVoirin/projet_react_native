import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container, Radio, Left, Right, Icon, Body, Title, Subtitle, Header, H1, H2, Button, View, Card, Text, Item, Input, Textarea, Label } from 'native-base';
import CheckboxList from '../components/forms/CheckboxList'
import RadioList from '../components/forms/RadioList'
import DatePickers from '../components/forms/DatePickers'
import RangeList from '../components/forms/RangeList'
import TakePicture from '../containers/camera/TakePicture'
import HeaderApp from '../components/HeaderApp';
import FooterApp from '../components/FooterApp';
import { Actions } from 'react-native-router-flux';

import { Alert, AsyncStorage } from "react-native"


export default class Forms extends Component {
  
  constructor(props){
    super(props);
  }

  state = {
    questions: undefined,
  }


  async componentDidMount(){
    let listOfFormsPromises = await AsyncStorage.getItem(this.props.nameform);
    const tableau = JSON.parse(listOfFormsPromises);
    const questions = tableau[this.props.numberquestion];
    this.setState({questions});
  }


  render() {
    let label = '';
    let name = '';
    let category = '';
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
      <HeaderApp title={this.props.title}/>
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
                <Text>Réponse  
                {(type === 'checkbox') 
                    ? ' (choix multiples)' 
                    : (type === 'radio')
                      ? ' (Un seul choix)'
                      : '' 
                } :</Text>

                {( () => {
                  switch(type) {
                      case 'string':
                        return <Item><Input placeholder='Saisissez votre réponse' /></Item>;
                      case 'textarea':
                        return <Textarea style={{width:'100%'}} rowSpan={5} bordered />;
                      case 'checkbox':  
                        return <CheckboxList answers={choices}/>
                      case 'radio':  
                        return <RadioList answers={choices}/>
                      case 'date' : 
                        return <DatePickers />       
                      case 'ranges' : 
                        return <RangeList minmax={choices}/>
                      case 'file':
                        return <TakePicture numberform={this.props.numberform} numberquestion={this.props.numberquestion}/>
                      default:
                        return '';
                  }
                  })()}
                </View>
            </Card>
            <View style={styles.viewButtons}>
           
              <Button style={styles.buttonLeft} onPress={() => {alert(this.props.nameform); Actions.refresh({nameform: 'essai_0_1', numberquestion: 2})}}>
                <Text>Précédente</Text>
              </Button>
          
            
              <Button style={styles.buttonRight} onPress={() => Actions.refresh ({nameform: this.props.nameform, numberquestion: 3})}>
                <Text>Suivant</Text>
              </Button>
            
            </View>
          </View>
          
        }
      
      </ScrollView>
      <FooterApp/>
      </Container>
      
    ); 
  } 
}

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
    position:'absolute', 
    top:20,
    left:0
  },
  buttonRight:{
    position:'absolute', 
    top:20,
    right:0
  },
  viewButtons :{ 
    minHeight:80,
    flexDirection: "row", 
    flex: 1, 
    position: "relative", 
    top: 15,  
    justifyContent: 'space-between', 
    padding: 10,
    marginBottom: 20, 
    paddingTop : 80,
  }, 
  viewForm : {
    // marginRight : 100,
    // marginLeft : 100,
    //paddingLeft : 100,
    //paddingRight : 100,
    width: "100%"
  },
  title : {
    fontSize : 12,
    paddingTop : 15,
  },
  H2 : {
    textAlign: 'center'
  }
  
});