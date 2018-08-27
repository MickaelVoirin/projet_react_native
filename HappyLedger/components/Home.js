import React from 'react';
import { Container, Item, Input, Header, Content, List, ListItem, Text, Icon, Right, Body, View } from 'native-base';
import { Actions } from 'react-native-router-flux';
import FooterApp from './FooterApp';
import { StyleSheet, AsyncStorage } from 'react-native';
import HeaderApp from './HeaderApp';
import Connection from '../containers/Connection';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      auth: false,
    };
  }

  async _loadData() {
    try {
      const value = await AsyncStorage.getItem('auth');
      if (value === 'true') {
        // We have data!!
        console.log(value);
        this.setState({ auth: true })
      }
    } catch (error) {
      console.log(error);

    }
  }

  componentDidUpdate() {
    this._loadData()
  }

  render() {

    let rendering

    if (!this.state.auth) {
      rendering = <Container><Connection /></Container>
    } else {
      rendering =
        <Container>
          <HeaderApp title={this.props.title} />
          <Header
            searchBar
            rounded
            style={styles.headerStyle}
          >
            <Item>
              <Icon
                type="Entypo"
                name="magnifying-glass"
                onPress={() => Actions.Recherche()}
              />
              <Input placeholder="Rechercher des Titres" />
            </Item>
          </Header>

          <Content>
            <List>

              <ListItem
                onPress={() => Actions.Portefeuille()}
              >
                <Body>
                  <Text style={styles.text}>Portefeuille</Text>
                </Body>
                <Right>
                  <Icon style={styles.iconColor} type="Entypo" name="wallet" />
                </Right>
              </ListItem>

              <ListItem
                onPress={() => Actions.AcheterVendre()}
              >
                <Body>
                  <Text style={styles.text}>Acheter / Vendre</Text>
                </Body>
                <Right>
                  <Icon style={styles.iconColor} type="MaterialCommunityIcons" name="bank" />
                </Right>
              </ListItem>

              <ListItem
                onPress={() => Actions.Investir()}
              >
                <Body>
                  <Text style={styles.text}>Investir</Text>
                </Body>
                <Right>
                  <Icon style={styles.iconColor} type="FontAwesome" name="pie-chart" />
                </Right>
              </ListItem>

              <ListItem
                onPress={() => Actions.Epargner()}
              >
                <Body>
                  <Text style={styles.text}>Epargner</Text>
                </Body>
                <Right>
                  <Icon style={styles.iconColor} type="MaterialCommunityIcons" name="treasure-chest" />
                </Right>
              </ListItem>

              <ListItem
                onPress={() => Actions.DemandePret()}
              >
                <Body>
                  <Text style={styles.text}>Demande de Prêt</Text>
                </Body>
                <Right>
                  <Icon style={styles.iconColor} type="Entypo" name="documents" />
                </Right>
              </ListItem>

              <ListItem
                onPress={() => Actions.AssuranceVie()}
              >
                <Body>
                  <Text style={styles.text}>Assurance Vie</Text>
                </Body>
                <Right>
                  <Icon
                    style={styles.iconColor}
                    type="FontAwesome"
                    name="birthday-cake" />
                </Right>
              </ListItem>

            </List>
          </Content>
          <FooterApp /></Container>
    }

    return (
      <Container>{rendering}</Container>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    fontFamily: 'raleway',
  },
  iconColor: {
    color: "black",
  },
  headerStyle: {
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#f2f2f2',
  },
});