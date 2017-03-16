const initialState = {
  val: 'hello'
}

const test = (state = initialState, action) => {
  switch (action.type) {
    case 'world':
      return Object.assign({}, state, {
        val: 'hello world'
      });
    default:
      return state;
  }
};

export default test;