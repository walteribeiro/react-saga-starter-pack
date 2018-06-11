// Types
export const Types = {
  REQUEST: 'firstDuck/REQUEST',
  SUCCESS: 'firstDuck/SUCCESS',
};

// Reducers
const initialState = {};

export default function firstDuck(state = initialState, action) {
  switch (action.type) {
    case Types.SUCCESS:
      return state;

    case Types.REQUEST:
      return state;

    default:
      return state;
  }
}

// Actions
export const Creators = {
  request: () => ({
    type: Types.REQUEST,
  }),

  success: () => ({
    type: Types.ADD_SUCCESS,
  }),
};
