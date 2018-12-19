import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';
import { deleteReview } from '../actions/restaurants';

class ReviewsContainer extends Component {

  deleteReview = review => {
    console.log(review);
    this.props.deleteReview(review)
  }

  render() {
    return (
      <div>
        <ReviewInput />
        <Reviews reviews={this.props.reviews} deleteReview={this.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { reviews: state.reviews }
}

export default connect(mapStateToProps, { deleteReview })(ReviewsContainer);