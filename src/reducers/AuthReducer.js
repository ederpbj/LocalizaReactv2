const initialState = {
  email: '',
  password: '',
  status: 0,
};

const AuthReducer = (state = initialState, action) => {
  //Alteração dos states
  if (action.type == 'changeEmail') {
    return {...state, email: action.payload.email};
  }

  //Quando mudar status
  if (action.type == 'changeStatus') {
    return {...state, email: action.payload.email};
  }

  return state;
};

export default AuthReducer;
