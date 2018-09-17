const addForms = (state = {}, action) => {
  switch (action.type) {
    // Ajout de toutes les question d'un formulaire
    // Clé : nom du formulaire, valeur : liste des questions
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