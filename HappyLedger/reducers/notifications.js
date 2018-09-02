const notifications = (state = [], action) => {
  switch (action.type) {
      case 'ADD_NOTIFS':
          return [...state,...action.notifications];
      default:
          return state;
  }
}

export default notifications;