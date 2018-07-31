import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { H1, H2, Button, View, Card, Text, Item, Input, Textarea } from 'native-base';
import CheckboxList from './CheckboxList'
import RadioList from './RadioList'
import DatePickers from './DatePickers'
import RangeList from './RangeList'
import { Actions } from 'react-native-router-flux';

const cards = [
  {
    id : 1,
    question: 'Question 1 pour test',
    type: 'text'
  },
  {
    id : 2,
    question: 'Nombre d’années d\'expérience dans une fonction en relation avec les marchés financiers',
    type: 'textarea'
  },
  {
    id : 3,
    question: 'Nombre d’années d\'expésddsfrience dans une fonction en relation avec les marchés financiers',
    type: 'checkbox',
    answers: ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'AjoutTest']
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
    answers: ['Youpi', 'Text 1', 'Text 4', 'AjoutTest', 'Text 3', 'Text 6']
  },
  {
    id : 6,
    question: 'Tranches de revenus par an',
    minMax : [10000, 300000],
    type: 'ranges',
  },
  {
    id : 7,
    question: 'Choisir une date',
    type: 'date',
  }
];

export default class Form3 extends Component {
  
  constructor(props){
    super(props);
  }

  render() {
    const elements = cards.find( (a) => {return a.id === parseFloat(this.props.numberquestion)} );

    return (
      <ScrollView style={styles.container}>
       
        { (!elements) 
          ? <Text style={styles.titleH1} onPress={() => Actions.Forms3 ({numberform: '1', numberquestion: '1'})}>
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
                      default:
                        return '';
                  }
                  })()}
                </View>
            </Card>
            <View style={styles.viewButtons}>
            {elements.id !== 1 &&
              <Button style={styles.buttonLeft} onPress={() => Actions.Forms3 ({numberform: this.props.numberform, numberquestion: elements.id - 1})}>
                <Text>Précédente</Text>
              </Button>
            }
            {elements.id !== cards.length &&
              <Button style={styles.buttonRight} onPress={() => Actions.Forms3 ({numberform: this.props.numberform, numberquestion: elements.id + 1})}>
                <Text>Suivant</Text>
              </Button>
            }
            </View>
          </View>
          
        }
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    top:30,
    left:0
  },
  buttonRight:{
    position:'absolute', 
    top:30,
    right:0
  },
  viewButtons :{ 
    minHeight:150,
    flexDirection: "row", 
    flex: 1, 
    position: "relative", 
    top: 15,  
    justifyContent: 'space-between', 
    padding: 15,
    marginBottom:15, 
  }, 
});