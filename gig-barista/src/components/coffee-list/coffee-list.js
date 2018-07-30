import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addCoffee } from '../../actions/index';
import { updateCoffee } from '../../actions/index';

import CoffeeSingle from '../coffee-single/coffee-single';
import styles from './coffee-list.scss';

const CoffeeList = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="coffee-display">
        {this.props.coffees.map((coffee, i) =>
          <CoffeeSingle  {...this.props} key={i} coffee={coffee}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    coffees: state.coffees
  };
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({addCoffee: addCoffee, updateCoffee: updateCoffee}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(CoffeeList);
