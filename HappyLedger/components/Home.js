import React from 'react';
import { Container, Item, Input, Header, Content, List, ListItem, Text, Icon, Right, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import FooterApp from '../containers/FooterApp';
import { StyleSheet, AsyncStorage } from 'react-native';
import HeaderApp from './HeaderApp';
import Connection from '../containers/Connection';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      auth: false,
      status: ''
    };
  }

// vérifie si l'utilisateur est identifié
  async _loadData() {
    try {
      const value = await AsyncStorage.getItem('auth');
      if (value === 'true') {
        return value
      }
    } catch (error) {
      console.log(error);

    }
  }

// vérifie si le statut de l'utilisateur est particulier ou entreprise
  async _getUserStatus() {
    try {
      const value = await AsyncStorage.getItem('status');
      if (value) {
        return value
      }
    } catch (error) {
      console.log(error);

    }
  }

  async componentWillReceiveProps() {
    data = await this._loadData()
    userStatus = await this._getUserStatus()
    this.setState({ 
      auth: data,
      status: userStatus,
    })
  }

  render() {

    let rendering
    if (!this.state.auth) {
      rendering = <Container><Connection /></Container>
    } else {
      let render_userStatus
      if (this.state.status == 'entreprise') {
        render_userStatus = 
          <ListItem
            onPress={() => Actions.SendPartnAuth()}
            style={styles.SendPartnAuth}
          >
            <Body>
              <Text style={styles.textWhite}>Envoi de Formulaire</Text>
            </Body>
            <Right>
              <Icon style={styles.iconColorWhite} type="Entypo" name="direction" />
            </Right>
            </ListItem>
      }

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
                { render_userStatus }
            </List>
          </Content>
          <FooterApp />
          </Container>
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
  SendPartnAuth: {
    backgroundColor: '#4273e9',
    marginLeft: -10
  },
  textWhite: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    fontFamily: 'raleway',
    color: 'white',
  },
  iconColorWhite: {
    color: "white",
  },
});