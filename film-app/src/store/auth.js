const SET_USER = 'auth/SET_USER';
const CLEAR_USER = 'auth/CLEAR_USER';
const LOGOUT_USER = 'auth/LOGOUT_USER';


export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload};
    case CLEAR_USER:
      return { ...state, user: null };
    case LOGOUT_USER:
      return { ...state, user: null };  
    default:
      return state;
  }
};

export default authReducer;