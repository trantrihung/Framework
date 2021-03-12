import { GET_API } from "../constants/ProductListConstants";

const initialState = {
  courses: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_API: {
      state.courses = action.courses;
      console.log(state.courses);
      return { ...state };
    }

    default:
      return state;
  }
};
