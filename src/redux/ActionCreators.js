import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";

// return plain JS object
export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    // keys: parameters passed from function
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

/* 
To include Redux Thunk middleware, you pass it as an argument to Redux.applyMiddleware(). 
This statement is then provided as a second optional parameter to the createStore() function. 
SEE configurestore.js for the applyMiddleware().
Then, to create an asynchronous action, you return a function in the action creator that takes 
dispatch as an argument. Within this function, you can dispatch actions and perform asynchronous requests. 

In this example, an asynchronous request is simulated with a setTimeout() call. It's common to
dispatch an action before initiating any asynchronous behavior so that your application state knows 
that some data is being requested (this state could display a loading icon, for instance). Then, 
once you receive the data, you dispatch another action which carries the data as a payload along 
with information that the action is completed.

Remember that you're passing dispatch as a parameter to this special action creator. This is what you'll use to dispatch your actions, you simply pass the action directly to dispatch and the middleware takes care of the rest.
*/

// this is a thunk function, or a thunk func, or even a thunktion
// async function
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess, // errmess is a string
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});