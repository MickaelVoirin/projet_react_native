const addForms = (state = {}, action) => {
  switch (action.type) {
    case 'ADDING_FORM' :
      const copyS = {...state};
      const keysQuestions = Object.keys(copyS);
      if(!keysQuestions.includes(action.element.name)){
        copyS[action.element.name] = action.element.list;
      }
      return copyS;
    default:
      return state;
  }
}

export default addForms;