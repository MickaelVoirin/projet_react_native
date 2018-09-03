const addForms = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_FORM' :
      const copy = {...state};
      const elements = [...action.elements];
      for (let value of elements){
        copy[value.name] = value.elements;
      }
      return copy;
    default:
      return state;
  }
}

export default addForms;