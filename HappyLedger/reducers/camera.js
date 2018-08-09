const camera = (state = '', action) => {

    switch(action.type){
      case 'TAKE_URI' :
        return action.uri;
      default:
        return state;
    }

}

export default camera;