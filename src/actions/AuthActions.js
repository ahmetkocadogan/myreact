import { AsyncStorage } from 'react-native';
import navigateTo from './navigateTo';
import {
  APP_LOGIN_SUCCESS,
  APP_LOGIN_FAIL,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  API_ROOT_URL
} from './types';

export const usernameChanged = (text) => {
  return{
    type: USERNAME_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return{
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser =({ username, password }) => async (dispatch)  => {

    dispatch({ type: LOGIN_USER });
   await AsyncStorage.removeItem('app_token');
   let token = await AsyncStorage.getItem('app_token');
   if (token) {
     // login daha önceden yapılmış
     dispatch({type: APP_LOGIN_SUCCESS , payload: token});
     //navigateTo(dispatch, 'drawerStack', true);
     this.props.navigate('drawerStack');

   } else {
     // login sürecini başlat
     var headers = {
       'Accept': 'application/json',
       'Content-Type': 'application/x-www-form-urlencoded'
     }
     var details = {
       'username': 'ahmet',
       'password': '123456',
       'grant_type': 'password',
       'deviceId': 'ahmet'
     };
     var formBody = [];
     for (var property in details) {
       var encodedKey = encodeURIComponent(property);
       var encodedValue = encodeURIComponent(details[property]);
       formBody.push(encodedKey + "=" + encodedValue);
     }
     formBody = formBody.join("&");

      let result = await fetch(API_ROOT_URL + '/token', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/x-www-form-urlencoded'
         },
         body: formBody
       });
   //let result = await fetch("https://jsonplaceholder.typicode.com/users");
     console.log(result);
     console.log('------------');
     console.log(result.status);
     console.log('------------');

     let resultJson = await result.json();

     if (result.status === 401) {// login fail
       console.log('401 fırladı');
       dispatch({ type: APP_LOGIN_FAIL, error:'Kullanıcı adı ve/veya şifre hatalı'});
     }
     if (result.status === 400) {// login fail
       console.log('400 fırladı');
       dispatch({ type: APP_LOGIN_FAIL, error: resultJson.error_description});
     }
     if (result.status === 500) {// login fail
       console.log('500 fırladı');
       dispatch({ type: APP_LOGIN_FAIL,error: 'Kaynak bulunamadı'});
     }
     if (result.status === 200){
       console.log('200 fırladı');
       await AsyncStorage.setItem('app_token',resultJson.access_token);
       dispatch({ type: APP_LOGIN_SUCCESS , payload: resultJson.access_token });
       navigateTo(dispatch, 'drawerStack', true);
       //this.props.navigate('drawerStack');
     }

     //doLogin({username,password},dispatch);
   }
}
const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: APP_LOGIN_SUCCESS,
    payload: user
  });

  navigateTo(dispatch, 'EmployeeList', true);
};

const logoutUserSuccess = (dispatch) => {
  dispatch({
    type: APP_LOGOUT_SUCCESS
  });

  navigateTo(dispatch, 'LoginForm', true);
};

export const logout = () =>
  () => {
    //firebase.auth().signOut();
  };
