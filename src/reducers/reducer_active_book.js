// State argument is not application state, only the state this reducer is responsible for
// switch statement
// State is a plain JS object. The Redux state is entirely different from the component state of the React appliation
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED' :
    return action.payload;
  }

  return state;
}