export default function config(state = [], action) {
  console.log('The config will change');
  console.log(state, action);
  return state;
}
