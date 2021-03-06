const notifications = (state = [], action) => {
  switch (action.type) {
      // Update toutes les notifications comme non nouvelles
      case 'UPDATE_NOTIFS_NOT_NEW':
          const copyState = [...state];
          return copyState.map( (x) => {
            x.new = false;
            return x;
          });
      // Liste les notifications au lancement de l'application
      case 'NOTIF_LAUNCH':
        const notificationsStorage = [];
        for(let valeurJsons of action.notificationsJSON){
          let temoin = true;
          for(let valeurStorage of action.notificationsStorage){
            if(valeurStorage._id === valeurJsons._id){
              if(valeurStorage.hasOwnProperty('new') && valeurStorage.new === false){temoin = false};
                valeurJsons = {...valeurStorage};  
            } 
          }
          if(temoin){valeurJsons['new'] = true};
          notificationsStorage.push(valeurJsons); 
        }
        return notificationsStorage;

      // Récupère les nouvelles notifications selon le back   
      case 'NOTIF_UPDATE':
        const notificationsupdate = [];
        for(let valeurJsons of action.notificationsJSON){
          let temoin = true;
          for(let valeurState of state){  
            if(valeurState._id === valeurJsons._id){
                if(valeurState.hasOwnProperty('new') && valeurState.new === false){temoin = false};
                valeurJsons = {...valeurState};
            } 
          }
          if(temoin){valeurJsons['new'] = true;};
          notificationsupdate.push(valeurJsons); 
        }
        return notificationsupdate;

      // Permet de formater la liste des notifications (name + title)  
      case 'NOTIF_ELEMENT':
        const copy = [...state];
        return copy.map( x => {
          if(x._id === action.element._id){
            x.name = action.element.name;
            x.title = action.element.title;
          }  
          return x;
        });
        
      default:
          return state;
  }
}

export default notifications;