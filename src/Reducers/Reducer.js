import { INCREMENT, DECREMENT, RESET } from "../Actions/Action";

const initialState = {
  count: 0,
};

const actionHandlers = {
  [INCREMENT]: (state) => ({ count: state.count + 1 }),
  [DECREMENT]: (state) => ({ count: state.count - 1 }),
  [RESET]: () => ({ count: 0 }),
};

function reducer(state = initialState, action) {
  const handler = actionHandlers[action.type];
  return handler ? handler(state) : state;
}

export default reducer;
