import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { H1, Content, Input, Item, Text, Label, ListItem, CheckBox, Body, Textarea, Button } from 'native-base'
//<Container style={styles.container}>

export default class Account extends React.Component {
  
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
      <ScrollView style={styles.container}>
        
        <H1>Form view</H1>
          
          <Item stackedLabel>
            <Label style={styles.label}>
              Question 1
            </Label>
            <Input />
          </Item>
          
          <Item stackedLabel>
            <Label style={styles.label}>
                Question 2
            </Label>
            <Input />
          </Item>
          
          <Label style={styles.label}>
            Question 3
          </Label>
          <Textarea style={{width:'100%'}} rowSpan={5} bordered />
          
          <Text style={styles.label}>Question 4</Text>
          <ListItem>
            <CheckBox 
              checked={this.state.checkBoxes[0]} 
              onPress={() => {this.onPressCheckBox(0)}}/>
            <Body>
              <Text>Option 1</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox 
              checked={this.state.checkBoxes[1]} 
              onPress={() => {this.onPressCheckBox(1)}}/>
            <Body>
              <Text>Option 2</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox
              checked={this.state.checkBoxes[2]} 
              onPress={() => {this.onPressCheckBox(2)}}/>
            <Body>
              <Text>Option 3</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox
              checked={this.state.checkBoxes[4]} 
              onPress={() => {this.onPressCheckBox(4)}}/> 
            <Body>
              <Text>Option 4</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox
              checked={this.state.checkBoxes[5]} 
              onPress={() => {this.onPressCheckBox(5)}}/>
            <Body>
              <Text>Option 5</Text>
            </Body>
          </ListItem>
          <Content style={styles.content}>
              <Button block rounded color="#841584"><Text> Page suivante </Text></Button>
          </Content>
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
  title: {
    color:"#000", 
    fontSize:20,
    textAlign:"center", 
    marginTop:20
  },
  label:{
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
