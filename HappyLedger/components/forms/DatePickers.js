import React, { Component } from 'react';
import { DatePicker, Text, Content } from 'native-base';

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
            // defaultDate={new Date()}
            // minimumDate={new Date()}
            // maximumDate={new Date(2040, 8, 30)}
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
          <Text>
            Date: {this.state.chosenDate.toString().substr(4, 12)}
          </Text>
      </Content>
    );
  }
}
