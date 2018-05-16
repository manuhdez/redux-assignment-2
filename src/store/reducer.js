const initialState = {
  persons: []
}

// Reducer
const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_PERSON') {
      const newPerson = {
          id: Math.random(), // not really unique but good enough here!
          name: 'Max',
          age: Math.floor( Math.random() * 40 )
      }
      const newState = {...state};
      newState.persons.push(newPerson);

      return newState;
  }

  return state;
}

export default reducer;