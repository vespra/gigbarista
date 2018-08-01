//import {setCookie} from '../../utils/utils';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function config(state = [], action) {
  switch(action.type) {
    case 'UPDATE_DAILY_FORM' :
      console.log('UPDATING DAILY FORM!!');
      //
      const coffee_bean_type = action.coffeeType;
      const coffee_amount = action.coffeeAmount;
      cookies.set('coffee_bean_type', coffee_bean_type, 1);
      cookies.set('coffee_amount', coffee_amount, 1);
      return {
        ...state,
        coffee_bean_type,
        coffee_amount
      };
    default:
      return state;
  }
}
