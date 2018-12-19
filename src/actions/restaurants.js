export const addRestaurant = restaurant => {
    return {
        type: "ADD_RESTAURANT", 
        payload: restaurant
    }
}

export const deleteRestaurant = restaurant => {
    return {
        type: "DELETE_RESTAURANT", 
        payload: restaurant
    }
}

export const addReview = review => {
    return {
        type: "ADD_REVIEW", 
        payload: review
    }
}

export const deleteReview = review => {
    return {
        type: "DELETE_REVIEW", 
        payload: review
    }
}