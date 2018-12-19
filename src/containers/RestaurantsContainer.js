import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { deleteRestaurant } from '../actions/restaurants';

class RestaurantsContainer extends Component {

  deleteRestaurant = restaurant => {
    console.log(restaurant);
    this.props.deleteRestaurant(restaurant)
  }

  render() {
    return (
      <div>
        <RestaurantInput />
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.deleteRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

export default connect(mapStateToProps, { deleteRestaurant })(RestaurantsContainer);