import { ADD_TODO, TOGLE_TODO, REMOVE_TODO } from '../constants/index.js';

export default function todo(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGLE_TODO:  
      return state.map((todo, index) => {
        if(index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }

        return todo;
      });
    default:
      return state;
  }
}