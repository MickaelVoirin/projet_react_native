import React, { Component } from 'react';
import { DatePicker, Text, Content } from 'native-base';
import { StyleSheet} from 'react-native';

export default class DatePickers extends Component {
 
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }


  render() {
    return (
      <Content>
          <DatePicker
            locale={"fr"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
          />
          <Text style={styles.date}>
            Date: {this.state.chosenDate.toString().substr(4, 12)}
          </Text>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  date : {
    marginTop : 20,
    marginBottom : 10, 
    marginLeft : 10
  }
});
