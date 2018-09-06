const mediaLoader = (state = '', action) => {

    switch(action.type){
      case 'GET_MEDIA' :
        return action.media;
      default:
        return state;
    }

}

export default mediaLoader;