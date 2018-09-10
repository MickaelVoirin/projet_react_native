# bordeaux-0618-happyledger

## Description du projet

Happy Ledger est une application mobile React Native pour smartphones Android et iOS.

C'est une solution universelle pour les démarches administratives permettant de remplir des questionnaires d'investissement une seule fois et de les partager avec des entités financières.

## Technologies

Application mobile : React Native / Redux / Expo

Backend : NodeJS / Express

## Descriptif des dossiers et fichiers

HappyLedger : source de l'application mobile

back : backend de développement avec l'API et les données de test

## Installation

- Décompresser le fichier zip

- exécuter npm install dans les dossiers back et HappyLedger

- exécuter npm start dans le dossier back

- créer un fichier urlAPI.js dans le dossier HappyLedger avec pour contenu : 

```javascript
export default urlAPI = 'http://X.X.X.X:8888/api/'
```

où X.X.X.X est l'adresse IP du backend NodeJS ( par défaut l'adresse IP de votre ordinateur)

- exécuter npm start dans le dossier HappyLedger

- installer et executer expo sur le téléphone portable

- flasher le QR code fourni par le terminal pour qu'expo construise un bundle de l'application et l'affiche sur le téléphone

## Modules installés
 
### Application mobile

#### axios

Description : Client HTTP basé sur les Promises pour le navigateur et NodeJS

Documentation : [Github](https://github.com/axios/axios)

#### expo

Description : SDK qui fournit l'accès aux fonctionnalités des smartphones

Documentation : [Expo](https://docs.expo.io/versions/latest/)

#### native-base

Description : Boite à outils pour le design d'application React Native

Documentation : [native-base](https://docs.nativebase.io/)

#### react-native

Description : Framework utilisant React et Javascript pour développer des applications mobiles natives

Documentation : [React Native](https://facebook.github.io/react-native/)

#### react-native-elements

Description : Boite à outils pour le design d'application React Native

Documentation : [react-native-elements](https://react-native-training.github.io/react-native-elements/)

#### react-native-is-iphonex

Description : Module complémentaire pour adapter la caméra à l'Iphone X

Documentation : [NPM](https://www.npmjs.com/package/react-native-is-iphonex)

#### react-native-router-flux

Description : Gestion de la navigation entre les vues de l'application

Documentations :
    
[NPM](https://www.npmjs.com/package/react-native-router-flux)
    
[API et configuration](https://github.com/aksonov/react-native-router-flux/blob/HEAD/docs/API.md)

#### react-native-scalable-image

Description : Permet de calculer la taille de l'image et la redimensionner avec un ratio correct

Documentation : [NPM](https://www.npmjs.com/package/react-native-scalable-image)

#### react-redux

Description : Module de liaison entre React et Redux

Documentation : [Redux](https://redux.js.org/basics/usagewithreact)

#### redux

Description : Redux est un conteneur d'état prévisible pour les applications JavaScript.

Documentation : [Redux](https://redux.js.org/)

#### redux-thunk

Description : Nécessaire pour utiliser des requêtes asynchrones dans les actions Redux

Required to use asynchronous requests in actions

Documentation : [redux-thunk](https://github.com/reduxjs/redux-thunk)

### Backend


