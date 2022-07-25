const redux = require("redux");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CACKE = "BUY_CACKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Actions
function buyCake() {
  return {
    type: BUY_CACKE,
    info: "First redux actions",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// Reducers
const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

// Store
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated store", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
