export const addNotifs = (notifications) => ({
  type:'ADD_NOTIFS',
  notifications
});

export const updateNotifs = (notificationsToUpdate) => ({
  type:'UPDATE_NOTIFS_NOT_NEW',
  notificationsToUpdate
});