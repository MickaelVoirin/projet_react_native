const notifications = (state = [], action) => {
  switch (action.type) {
      case 'ADD_NOTIFS':
          return [...state,...action.notifications];
      case 'UPDATE_NOTIFS_NOT_NEW':
          const copyState = [...state];
          return copyState.map( (x) => {
            x['new'] = false;
            return x;
          });
      default:
          return state;
  }
}

export default notifications;