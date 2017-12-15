import {
  APP_LOGIN_SUCCESS,
  APP_LOGIN_FAIL,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
  username:'',
  password:'',
  error:'',
  user:null,
  unvan:'',
  loading:false
};

export default function (state= INITIAL_STATE, action) {
  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, username:action.payload };
    case PASSWORD_CHANGED:
        return { ...state, password:action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error:'' };
    case APP_LOGIN_SUCCESS:
      return { ...state , loading: false, username:'', password:'', unvan:'AHMET KOCADOGAN OTOMOTIV' };
    case APP_LOGIN_FAIL:
      return { ...state, error: 'Giriş Yapılamadı', password:'', loading:false };
    default:
      return state;
  }
};
