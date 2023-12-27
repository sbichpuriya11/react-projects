// How to do

const initialState = 0;
const updateValue = (state = initialState, action) => {
  console.log("Action", action);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default updateValue;
