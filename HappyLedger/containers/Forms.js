import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container, Left, Right, Icon, Body, Title, Header, H1, H2, Button, View, Card, Text, Item, Input, Textarea } from 'native-base';
import CheckboxList from '../components/forms/CheckboxList'
import RadioList from '../components/forms/RadioList'
import DatePickers from '../components/forms/DatePickers'
import RangeList from '../components/forms/RangeList'
import TakePicture from '../containers/camera/TakePicture'
import HeaderApp from '../components/HeaderApp';
import FooterApp from '../components/FooterApp';
import { Actions } from 'react-native-router-flux';

import { Alert, AsyncStorage } from "react-native"

const cards1 = [
  {
    id : 1,
    question: 'Votre prénom',
    type: 'text'
  },
  {
    id : 2,
    question: 'Votre adresse',
    type: 'textarea'
  },
  {
    
    id : 3,
    question: 'Votre profession',
    type: 'checkbox',
    answers: ["etudiant", "chômeur", "retraité", "fonctionnaire", "indépendant", "salarié", "libéral", "autre"]
  },
  {
    id : 4,
    question: 'De quand date votre dernier investissement ? ',
    type: 'radio',
    answers: ['< 6 mois', '< 1 an', '< 2 ans', '< 5 ans', '< 10 ans']
  },
  {
    id : 5,
    question: 'Avez vous déjà perdu des investissements lors des trois dernières années ?',
    type: 'radio',
    answers: ['Oui', 'Non']
  },
];
const cards2 = [
  {
    id : 1,
    question: 'Piece identité',
    type: 'file',
  },
  {
    id : 2,
    question: 'Votre tranche de revenus par an',
    minMax : [10000, 300000],
    type: 'ranges',
  },
  {
    id : 3,
    question: 'Choisir une date',
    type: 'date',
  },
  {
    id : 4,
    question: 'Texte sur plusieurs lignes Texte sur plusieurs lignes Texte sur plusieurs lignes Texte sur plusieurs lignes',
    type: 'checkbox',
    answers: ['Text 1', 'Text 4', 'AjoutTest']
  },
  {
    id : 5,
    question: 'Texte sur plusieurs lignes Texte sur plusieurs lignes Texte sur plusieurs lignes Texte sur plusieurs lignes',
    type: 'radio',
    answers: ['Youpi', 'Text 1', 'Text 3', 'Text 6']
  },
];

export default class Forms extends Component {
  
  constructor(props){
    super(props);
  }

  state = {
    question : ''
  }

  async componentWillMount(){
    let listOfFormsPromises = await AsyncStorage.getItem(this.props.nameform);
    const tableau = JSON.parse(listOfFormsPromises);
    const question = tableau[this.props.numberquestion];
    //alert(JSON.stringify(question));
    this.setState({question});
  }


  render() {
    // alert('qsdqsdsqd');
    return(
      <Container> 
        <HeaderApp title={this.props.title}/>
          <Text>
            {JSON.stringify(this.state.question)}
          </Text>
          <View style={styles.viewButtons}>
            <Button style={styles.buttonLeft} onPress={() => Actions.Forms ({nameform: this.props.nameform, numberquestion: this.props.numberquestion - 1})}>
                <Text>Précédente</Text>
            </Button>
            
            <Button style={styles.buttonRight} onPress={() => Actions.Forms ({nameform: this.props.nameform, numberquestion:  this.props.numberquestion + 1})}>
              <Text>Suivant</Text>
            </Button>  
          </View>
        <FooterApp/>
      </Container> 
    )

    /* const cards = (this.props.numberform == 1) ? cards1 : cards2;
    const elements = cards.find( (a) => {return a.id === parseFloat(this.props.numberquestion)} );

    return (
      <Container> 
      <HeaderApp title={this.props.title}/>
      <ScrollView style={styles.scrollview}>
        { (!elements) 
          ? <Text style={styles.titleH1} onPress={() => Actions.Forms ({numberform: '1', numberquestion: '1'})}>
              Aller au questionnaire numero 1
            </Text>
          :
          <View>  
            <H1 style={styles.titleH1}>Questionnaire n ° {this.props.numberform}</H1>
            <Card style={styles.card}>
                <H2 style={styles.titleH2}>Question n ° {elements.id}</H2>
                <Text style={styles.question}>"{elements.question}"</Text>
                <View style={styles.field}>
                <Text style={styles.titleH2}>Réponse  
                {(elements.type === 'checkbox') 
                    ? ' (choix multiples)' 
                    : (elements.type === 'radio')
                      ? ' (Un seul choix)'
                      : '' 
                } :</Text>
                {(() => {
                  switch(elements.type) {
                      case 'text':
                        return <Item regular><Input /></Item>;
                      case 'textarea':
                        return <Textarea style={{width:'100%'}} rowSpan={5} bordered />;
                      case 'checkbox':  
                        return <CheckboxList answers={elements.answers}/>
                      case 'radio':  
                        return <RadioList answers={elements.answers}/>
                      case 'date' : 
                        return <DatePickers />       
                      case 'ranges' : 
                        return <RangeList minmax={elements.minMax}/>
                      case 'file':
                        return <TakePicture numberform={this.props.numberform} numberquestion={this.props.numberquestion}/>
                      default:
                        return '';
                  }
                  })()}
                </View>
            </Card>
            <View style={styles.viewButtons}>
            {elements.id !== 1 &&
              <Button style={styles.buttonLeft} onPress={() => Actions.Forms ({numberform: this.props.numberform, numberquestion: elements.id - 1})}>
                <Text>Précédente</Text>
              </Button>
            }
            {elements.id !== cards.length &&
              <Button style={styles.buttonRight} onPress={() => Actions.Forms ({numberform: this.props.numberform, numberquestion: elements.id + 1})}>
                <Text>Suivant</Text>
              </Button>
            }
            </View>
          </View>
          
        }
      
      </ScrollView>
      <FooterApp/>
      </Container>
      
    ); */
  } 
}

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#fff',
    paddingRight:10,
    paddingLeft:10,
  },
  titleH1: {
    fontSize:20,
    textAlign:"center", 
    marginTop:20
  },
  card:{
    minHeight:350, 
    marginTop:10, 
    paddingRight:10, 
    paddingLeft:10
  },
  titleH2: {
    height:40,
    lineHeight:40,
    fontSize:18,
    textAlign:"left"
  },
  question:{
    height:80,
    borderBottomWidth:1,
    borderBottomColor:'#D1D5DA',
    fontSize:16,
    marginTop:15,
  },
  field:{
    marginTop:15,
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
    padding: 15,
    marginBottom:20, 
  }, 
});