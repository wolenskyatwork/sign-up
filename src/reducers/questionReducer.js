import * as types from '../constants/actionTypes';

const initialState = {
  questions: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.QUESTIONS_SUCCESS:
      const questions = action.questions;
      return { ...state, questions };
    default:
      return state;
  }
};
