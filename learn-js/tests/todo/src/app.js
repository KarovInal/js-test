import { createStore } from 'redux';

function counter(store = 0, action) {
  switch(action.type) {
    case 'INCREMENT':
      return store + 1;
    case 'DECREMENT':
      return store - 1;
    case 'SET_COUNTER':
      return store = action.count
    default:
      return store;
  }
}

let store = createStore(counter);

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({
  type: 'INCREMENT'
})

store.dispatch({
  type: 'SET_COUNTER',
  count: 100
})

store.dispatch({
  type: 'INCREMENT'
})