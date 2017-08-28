import { combineReducers } from 'redux';
import { todo } from './todo.js';
import { visibilityFilter } from './visibilityFilter.js';

let reducer = combineReducers({
  todo,
  visibilityFilter
})
