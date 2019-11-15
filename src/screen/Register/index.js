import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, ActivityIndicator, Alert, Keyboard } from 'react-native';
import { styles } from './styles';

export class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        loading: false
    }

    emptyInputValidation() {
        //return true
        if (this.state.name === '' || !this.state.password === '' || !this.state.email === '') {
            Alert.alert(
                'Alert',
                'Empty fields !',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
            return false
        } else {
            return true
        }
    }

    alphabetValidation() {
        var re = /^[A-Za-z]+$/
        return re.test(this.state.name);
    }

    alphanumericValidation() {
        var re = /(?=.*\d)(?=.*[a-z])/
        return re.test(this.state.password);
    }

    emailValidation() {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.state.email);
    }

    clearInputs(value) {
        switch (value) {
            case 'name':
                this.setState({ name: '' })
                break;
            case 'password':
                this.setState({ password: '' })
                break;
            case 'email':
                this.setState({ email: '' })
                break;
            case 'all':
                this.setState({
                    name: '',
                    email: '',
                    password: ''
                })
                break;
        }
    }

    checkInputValidity() {
        if (this.emptyInputValidation() == false) {
            return false
        } else if (this.alphabetValidation() == false) {
            this.clearInputs('name')
            Alert.alert(
                'Alert',
                'Invalid name !',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
            return false
        } else if (this.emailValidation() == false) {
            this.clearInputs('email')
            Alert.alert(
                'Alert',
                'Invalid email !',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
            return false
        } else if (this.alphanumericValidation() == false) {
            this.clearInputs('password')
            Alert.alert(
                'Alert',
                'Invalid password ! Your password should contain at least a number and an alphabet.',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
            return false
        } else {
            return true
        }
    }

    onInvalid() {
        this.setState({
            loading: false
        })
    }

    onSubmitClicked() {
        Keyboard.dismiss()
        this.setState({ loading: true })
        if (this.checkInputValidity() == false) {
            this.onInvalid()
            this.clearInputs()
            return
        }

        //Call API
        const finishLoading = this.onInvalid.bind(this)
        setTimeout(finishLoading, 2000),
            Alert.alert(
                'Alert',
                'Succussfully registered !',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            ),
            this.clearInputs('all')



    }

    render() {
        const state = this.state
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={styles.registrationText}>Registration</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <TextInput style={styles.textInputStyle} placeholder={'Name'} keyboardType={'ascii-capable'} onChangeText={(value) => this.setState({ name: value })} value={state.name} />
                    <TextInput style={styles.textInputStyle} placeholder={'Email'} keyboardType={'email-address'} onChangeText={(value) => this.setState({ email: value })} value={state.email} />
                    <TextInput style={styles.textInputStyle} placeholder={'Password'} keyboardType={'visible-password'} onChangeText={(value) => this.setState({ password: value })} value={state.password} />
                    <TouchableOpacity style={styles.registerButtonStyle} onPress={() => { this.onSubmitClicked() }}>
                        {!state.loading ? <Text style={styles.registerButtonTextStyle}>Sign Up</Text> :
                            <ActivityIndicator size='small' color='#fff' />}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Register;
