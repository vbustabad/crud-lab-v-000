import React, { Component } from 'react';

class Restaurants extends Component {

  render() {
    return(
      <ul>
        {this.props.restaurants.map((product, index) => <Restaurant key={index} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />)};
      </ul>
    );
  }
};

export default Restaurants;