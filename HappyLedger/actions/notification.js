// Reset toutes les notifications comme non nouvelles
export const notifsNotNew = () => ({
  type:'UPDATE_NOTIFS_NOT_NEW'
});

// Au lancement de l'application, liste toutes les notifications depuis le back et la mémoire téléphone
export const notifsLaunch = (notificationsJSON, notificationsStorage) => ({
  type:'NOTIF_LAUNCH',
  notificationsJSON,
  notificationsStorage
});

// A chaque lecture du composant HeaderApp, 
// compare les notifications du back avec celles du store afin de récuperer les nouvelles
// Attention, nécéssiterait un module de timer. 
export const notifsUpdate = (notificationsJSON) => ({
  type:'NOTIF_UPDATE',
  notificationsJSON
});

// Permet de formater la liste des notifications avec nom et title
export const notifElement = (element) => ({
  type:'NOTIF_ELEMENT',
  element
});
