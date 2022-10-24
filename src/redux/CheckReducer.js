export const contract = (state = { loading: true, data: {} }, action) => {
  switch (action.type) {
    case 'GET_CONTRACT':
      return action.payload && { ...state, loading: false, data: action.payload };
    default :
      return state;
  }
};
export const certificate = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CERTIFICATE':
      return action.payload;
    default :
      return state;
  }
};
