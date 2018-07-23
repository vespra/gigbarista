export default function (state=null, action) {
  switch(action.type) {
    case "COFFEE_SELECTED":
      return action.payload;
      break;
  }
  return state;
}
