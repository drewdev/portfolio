import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  counter: 0
};

interface Action {
  type: string;
  payload?: any;
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};


const store = configureStore({
  reducer: reducer
});

export default store;
