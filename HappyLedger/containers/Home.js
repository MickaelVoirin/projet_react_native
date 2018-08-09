import React from 'react';
import { Container, Item, Input, Header, Content, List, ListItem, Text, Icon, Right, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import FooterApp from '../Pages/FooterApp';
import { StyleSheet } from 'react-native';

class Home extends React.Component {
  render() { 
    return ( 
<Container>
  <Header 
  searchBar 
  rounded
  style={styles.headerStyle}
  >
          <Item>
            <Icon type="Entypo" name="magnifying-glass" />
            <Input placeholder="Rechercher des Titres" />
          </Item>
        </Header>

        <Content>
          <List>

            <ListItem>
              <Body>
              <Text style={styles.text}>Portefeuille</Text>
              </Body>
              <Right>
              <Icon style={styles.iconColor} type="Entypo" name="wallet" />
            </Right>
            </ListItem>

            <ListItem>
            <Body>
              <Text style={styles.text}>Acheter / Vendre</Text>
              </Body>
              <Right>
              <Icon style={styles.iconColor} type="MaterialCommunityIcons" name="bank" />
              </Right>
            </ListItem>

            <ListItem>
            <Body>
              <Text style={styles.text}>Investir</Text>
              </Body>
              <Right>
              <Icon style={styles.iconColor} type="FontAwesome" name="pie-chart" />
              </Right>
            </ListItem>

            <ListItem>
            <Body>
              <Text style={styles.text}>Epargner</Text>
              </Body>
              <Right>
              <Icon style={styles.iconColor} type="MaterialCommunityIcons" name="treasure-chest" />
              </Right>
            </ListItem>

            <ListItem>
              <Body>
              <Text style={styles.text}>Demande de Prêt</Text>
              </Body>
              <Right>
              <Icon style={styles.iconColor} type="Entypo" name="documents" />
              </Right>
            </ListItem>

            <ListItem>
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
        <FooterApp/>
      </Container>
     );
  }
}
 
export default Home;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingTop : 10,
    paddingBottom: 10,
    paddingLeft: 10,
    fontFamily: 'raleway',
  },
  iconColor: {
    color: "black",
  },
  headerStyle: {
    paddingBottom: 20,
  }

});