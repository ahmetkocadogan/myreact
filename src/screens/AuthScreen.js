import React , { Component } from 'react';
import { View, Text ,AsyncStorage} from 'react-native';
import {FormLabel, FormInput, Button} from 'react-native-elements';
import {usernameChanged,passwordChanged,loginUser} from '../actions';
import {connect} from 'react-redux';
import {Spinner} from '../components/Spinner';

class AuthScreen extends Component{
  static navigationOptions = {
    title: 'Giriş',
  };
  onUsernameChanged(text) {
    this.props.usernameChanged(text);
  }
  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress(){
    const {username,password} = this.props;
    this.props.loginUser({username,password});
  }
  renderButton(){
     if (this.props.loading) {
       return <Spinner size="large" />;
     }

     return(
       <Button onPress={this.onButtonPress.bind(this)} title='Giriş' />
     );
  }

  render(){
    return (
      <View>
        <View style={{marginBottom: 10}}>
          <FormLabel>Kullanıcı Adı</FormLabel>
          <FormInput
            autoCorrect = {false}
            value = {this.props.username}
            onChangeText={this.onUsernameChanged.bind(this)}
          />
        </View>

        <View style={{marginBottom: 10}}>
          <FormLabel>Şifre</FormLabel>
          <FormInput
            autoCorrect = {false}
            secureTextEntry
            value = {this.props.password}
            onChangeText={this.onPasswordChanged.bind(this)}
          />
        </View>

        <Text style = {styles.errorTextStyle}>
          {this.props.error}
        </Text>
        <View style={{marginBottom: 10}}>
          {this.renderButton()}
        </View>

      </View>
    );
  }
}

const styles = {
  errorTextStyle:{
    fontSize: 20,
    alignSelf:'center',
    color:'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const {username,password,error,loading,user} = auth;

  return {username,password,error,loading,user};
}

export default connect(mapStateToProps,{
  usernameChanged, passwordChanged,loginUser})(AuthScreen);
