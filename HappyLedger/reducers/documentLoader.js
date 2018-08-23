const documentLoader = (state = '', action) => {

    switch(action.type){
      case 'GET_DOCUMENT_DATA' :
        return action.document;
      default:
        return state;
    }

}

export default documentLoader;