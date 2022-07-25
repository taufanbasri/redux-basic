const redux = require("redux");

const createStore = redux.createStore;

const BUY_CACKE = "BUY_CACKE";

// Actions
function buyCake() {
  return {
    type: BUY_CACKE,
    info: "First redux actions",
  };
}

// Reducers
const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CACKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated store", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
