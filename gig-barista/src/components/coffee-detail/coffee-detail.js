import React from 'react';
import { connect } from 'react-redux';


const CoffeeDetail = class extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log('Submitting the form!');
    event.preventDefault();
  }

  render() {
    if (!this.props.coffee) {
      return (<h2>Select a coffee...</h2>)
    }
    return (
      <div>
        <h2> {this.props.coffee.name}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Milk Type:
            <select>
              <option value="Full Fat">Full Fat</option>
              <option value="Semi Skimmed">Semi Skimmed</option>
              <option value="Almond">Almond</option>
              <option value="Soya">Soya</option>
            </select>
          </label>
          <label> Ice:
            <select>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    coffee: state.activeCoffee
  };
}

export default connect(mapStateToProps)(CoffeeDetail);
