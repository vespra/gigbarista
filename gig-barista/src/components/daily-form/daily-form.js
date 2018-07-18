import React from "react";
import { connect } from 'react-redux';


import styles from "./daily-form.scss";

const DailyForm = class extends React.Component {
  constructor(props) {
    super(props);
    /*this.state = {
      coffeeType: "",
      coffeeAmount: 10,
      coffeeLocation: "GiG Beach",
      coffeeStation: "AFK Cafe"
    };*/

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Coffee Location:
          <input type="text" name="coffeeLocation" value={this.props.default.coffee_station_location} onChange={this.handleInputChange} />
        </label>
        <label>
          Coffee Station:
          <input type="text" name="coffeeStation" value={this.props.default.coffee_station} onChange={this.handleInputChange} />
        </label>
        <label>
          Coffee Bean Type:
          <input type="text" name="coffeeType" value={this.props.default.coffee_bean_type} onChange={this.handleInputChange} />
        </label>
        <label>
          Coffee Amount in grams:
          <input type="text" name="coffeeAmount" value={this.props.default.coffee_amount} onChange={this.handleInputChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  console.log(state.default);
  return {
    default: state.default[0]
  };

}

export default connect(mapStateToProps)(DailyForm);
