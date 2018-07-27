import React from 'react';

import styles from './coffee-single.scss';

const CoffeeSingle = class extends React.Component {
  render() {
    const {coffee, i} = this.props;
    return (
      <div key={coffee.id} className="single-coffee-container">
       <div className="coffee-box" onClick={() => this.props.addCoffee(coffee)}>
         <img src={coffee.imageUrl} />
         <p className="coffee-title">{coffee.name}</p>
       </div>
       <div className="customize-btn small">+</div>
     </div>
    )
  }
}

export default CoffeeSingle;
