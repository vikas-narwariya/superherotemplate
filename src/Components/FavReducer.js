// import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../types";

// export const FavReducer = (
//   state = { cartItems: JSON.parse(localStorage.getItem("FavMovies") || "[]") },
//   action
// ) => {
//   switch (action.type) {
//     case ADD_TO_FAV:
//       return { cartItems: action.payload.FavMovies };
//     case REMOVE_FROM_FAV:
//       return { cartItems: action.payload.FavMovies };
//     default:
//       return state;
//   }
// };


import initialState from "../initialState";
const FavReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_HERO": {
      return (state = [...state, action.payload.data]);
    }
    case "DEL_HERO": {
      return (state = state.filter(
        (hero) => hero.id !== action.payload.data.id
      ));
    }
  }
  return state;
};
export default FavReducer;
