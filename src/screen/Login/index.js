import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { styles } from './styles';

export class Login extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
    invalidInput: false
  }

  clearInputs() {
    this.setState({
      email: '',
      password: ''
    })
  }

  stopLoading() {
    this.setState({ loading: false })
  }

  onLoginClicked() {
    this.setState({ loading: true })
    //Call API
    const finishLoading = this.stopLoading.bind(this)
    setTimeout(finishLoading, 2000),
      Alert.alert(
        'Alert',
        'Succussfully logged in !',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      ),
      this.clearInputs()
  }

  renderErrorMessage() {
    return (
      this.state.invalidInput ? <Text style={{ marginTop: 30 }}>Invalid email/password ! Try again.</Text> : null
    )
  }

  render() {
    const state = this.state
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.welcomeText}>Welcome !</Text>
          {this.renderErrorMessage()}
        </View>
        <View style={styles.bottomContainer}>
          <TextInput style={styles.textInputStyle} placeholder={'Email'} keyboardType={'email-address'} onChangeText={(value) => this.setState({ email: value })} value={this.state.email} />
          <TextInput style={styles.textInputStyle} placeholder={'Password'} keyboardType={'visible-password'} onChangeText={(value) => this.setState({ password: value })} value={this.state.password} />
          <TouchableOpacity style={styles.loginButtonStyle} onPress={() => this.onLoginClicked()}>
            {!this.state.loading ? <Text style={styles.loginButtonTextStyle}>Login</Text> :
              <ActivityIndicator size='small' color='#fff' />}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;
