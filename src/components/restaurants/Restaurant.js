import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.deleteRestaurant(restaurant.id)} >Delete Restaurant</button>
          <ReviewsContainer restaurant={restaurant}/>
          <ReviewInput />
        </li>
      </div>
    );
  }
};

export default Restaurant;
