export const addNotifs = (notifications) => ({
  type:'ADD_NOTIFS',
  notifications
});

export const notifsNotNew = () => ({
  type:'UPDATE_NOTIFS_NOT_NEW'
});

export const notifsLaunch = (notificationsJSON, notificationsStorage) => ({
  type:'NOTIF_LAUNCH',
  notificationsJSON,
  notificationsStorage
});

export const notifsUpdate = (notificationsJSON) => ({
  type:'NOTIF_UPDATE',
  notificationsJSON
});

export const notifElement = (element) => ({
  type:'NOTIF_ELEMENT',
  element
});
