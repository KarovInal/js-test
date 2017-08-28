function createStore(reducer, initialState) {
  let currentReducer = reducer,
      currentState = initialState,
      subscribers = [];
  
  return {
    getState() {
      return currentState;
    },
    dispatch(action) {
      currentState = currentReducer(currentState, action);
      subscribers.forEach((fn) => {
        fn();
      })
      return action;
    },
    subscribe(fn) {
      subscribers.push(fn);
    }
  }
}

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

let store = createStore(counter)
store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })