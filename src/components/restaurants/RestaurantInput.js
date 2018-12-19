import React, { Component } from 'react';
import cuid from 'cuid';

class RestaurantInput extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      text: ""
    }

    this.handleOnChange = this.handleOnChange.bind(this) 
    this.handleOnSubmit = this.handleOnSubmit.bind(this) 
  }

  handleOnChange(e) {
    const { name, value } = e.target
    let state = this.state

    state[name] = value 
    this.setState(state)
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.addRestaurant(this.state);
  }  

  render() {
    return (
      <div className="RestaurantForm">
        <h2>Add a New Product</h2>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="text">Text:</label>
              <input
                  type="text"
                  name="text"
                  value={this.state.text}
                  onChange={this.handleOnChange}
                />
          </div>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
