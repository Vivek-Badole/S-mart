import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE } from "./action";

const initialState = {
  auth: false,
  token: "",
  error: false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNIN_REQUEST:
      return {
        auth: false,
        token: "",
        error: false,
      };
    case SIGNIN_SUCCESS:
      return {
        auth: true,
        token: payload,
        error: false,
      };
    case SIGNIN_FAILURE:
      return {
        auth: false,
        token: "",
        error: payload,
      };
    default:
      return state;
  }
};
export default reducer;
