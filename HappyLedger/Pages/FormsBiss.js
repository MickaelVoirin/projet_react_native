import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { H1, Button, Container, Content, View, DeckSwiper, Card, CardItem, Text, Left, Body, Item, Input, Textarea, ListItem, CheckBox } from 'native-base';
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
    type: 'checkbox'
  },
];
export default class FormBiss extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        checkBoxes : [false, false, false, false, false],
    }
    this.onPressCheckBox = this.onPressCheckBox.bind(this);
  }

  onPressCheckBox(number){
      const checkBoxes = [...this.state.checkBoxes];
      checkBoxes[number] = !checkBoxes[number];
      this.setState({checkBoxes});
  }
  
  render() {
    return (
      <Container style={styles.container}>
        <View>
          <H1 style={styles.title}>Form view</H1>
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={cards}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>
            }
            renderItem={item =>
              <Card style={{ elevation: 3 }} style={{height:350, marginTop:10, paddingRight:10, paddingLeft:10}}>
                <CardItem style={{height:40}}>
                  <Left>
                  <Text style={styles.question}>
                    Question {item.id} :
                  </Text>
                  </Left>
                </CardItem>
                <CardItem>
                  <Text style={styles.question}>
                    {item.question}
                  </Text>
                </CardItem>
                <CardItem>
                  {(() => {
                  switch(item.type) {
                      case 'text':
                          return <Item regular><Input /></Item>;
                      case 'textarea':
                          return <Textarea style={{width:'100%'}} rowSpan={5} bordered />;
                      case 'checkbox':  
                        return 
                        <Content>
                      <ListItem>
                        <CheckBox checked={false} />
                        <Body>
                          <Text>Daily Stand Up</Text>
                        </Body>
                      </ListItem>
                      </Content>;
                      default:
                          return 'qsdqsdqsddsq';
                  }
                  })()}
                </CardItem>
                
              </Card>
            }
          />
        </View>
        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 30, right: 30, justifyContent: 'space-between', padding: 15 }}>
          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Text>Précédent</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Text>Suivant</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingRight:10,
    paddingLeft:10,
  },
  title: {
    color:"#000", 
    fontSize:20,
    textAlign:"center", 
    marginTop:20
  },
  question:{
    color:"#000",
    fontSize:16,
    marginTop:15,
    marginBottom:5,
  },
  content:{
    marginTop:30,
    marginBottom:30,
  } 
});