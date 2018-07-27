export default function addCoffee(state = [], action) {
  switch(action.type) {
    case 'ADD_COFFEE' :
      console.log('Adding Coffee!!');
      const i = action.coffee.id;
      return [
        ...state.slice(0,i),
        {...state[i], ordered: state[i].ordered + 1},
        // {...state[i] },
        ...state.slice(i + 1),
      ]
    default:
      return state;
  }

}
