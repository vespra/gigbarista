import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectCoffee } from '../../actions/index';
import styles from './coffee-list.scss';

const CoffeeList = class extends React.Component {
  constructor(props) {
    super(props);
  }

  createListItems() {
    return this.props.coffeeType.map((coffee) => {
      return (
        <div key={coffee.id} className="single-coffee-container">
         <div className="coffee-box" onClick={() => this.props.selectCoffee(coffee)}>
           <img src={coffee.imageUrl} />
           <p className="coffee-title">{coffee.name}</p>
         </div>
         <div className="customize-btn small">+</div>
       </div>
      )
    });
  }

  render() {
    return (
      <div className="coffee-display">
        {this.createListItems()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    coffeeType: state.coffeeType
  };
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({selectCoffee: selectCoffee}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(CoffeeList);
