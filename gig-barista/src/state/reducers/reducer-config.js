function setCookie(cname, cvalue, exdays) {
    var date = new Date();
    var midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
    var expires = "expires="+ midnight;
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export default function config(state = [], action) {
  switch(action.type) {
    case 'UPDATE_DAILY_FORM' :
      console.log('UPDATING DAILY FORM!!');
      state.coffee_bean_type = action.coffeeType;
      state.coffee_amount = action.coffeeAmount;
      setCookie('coffee_bean_type', state.coffee_bean_type, 1);
      setCookie('coffee_amount', state.coffee_amount, 1);
      return state;
    default:
      return state;
  }
}
