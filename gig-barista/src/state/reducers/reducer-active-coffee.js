export default function updateCoffee(state = [], action) {
  switch(action.type) {
    case 'UPDATE_COFFEE' :
      console.log('UPDATING Coffee!!');
      return action.coffee
    default:
      return state;
  }
}
