import cuid from 'cuid';
export const cuidFn = cuid;

let initialState = {
    restaurants: [], 
    reviews: []
};

export default function manageRestaurants(state = initialState, action) {
    let currentRestaurant = state.restaurants.map(restaurant => restaurant.id === action.payload.id);
    let restaurantIndex = state.restaurants.indexOf(currentRestaurant);
    let currentReview = state.reviews.map(review => review.id === action.payload.id);
    let reviewIndex = state.reviews.indexOf(currentReview);

    switch (action.type) {
        case "ADD_RESTAURANT":
            return state.restaurants.concat(action.payload);

        case "DELETE_RESTAURANT":
            return state.restaurants.splice(restaurantIndex, 1);

        case "ADD_REVIEW":
            return state.reviews.concat(action.payload);

        case "DELETE_RESTAURANT":
            return state.reviews.splice(reviewIndex, 1);
        
        default:
            return state;
    }   
}
