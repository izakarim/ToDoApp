/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 *
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    StatusBar,
    TextInput,
    Button,
    TouchableOpacity,
    Alert
} from 'react-native';
import { connect } from 'react-redux';

// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//     android:
//         'Double tap R on your keyboard to reload,\n' +
//         'Shake or press menu button for dev menu',
// });

type Props = {};
export class Login extends Component<Props> {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
    }

    static navigationOptions = {
        header: null,
    };

    login() {
        fetch('https://dev-my-mobile.althea.kr/index.php/rest/V1/integration/customer/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": this.state.username,
                "password": this.state.password
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                    Alert.alert("Login successfully");
                    this.props.navigation.navigate("Home");

           })
            .catch((error) => {
                console.error(error);
            });
    }

        // this.props.login(this.state.email, this.state.password).then(() => {
        //     if (this.props.error) {
        //         alert(this.props.error)
        //     }
        //     else {
        //         alert(this.props.userData.user.name + 'user successfully logged in')
        //     }
        // })

    render() {
        // console.log(this.props.username.username);
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                           source={require("./images/login.png")}
                    />
                    <Text style={styles.title}>
                        Noobies
                    </Text>
                    {/*<Text style={styles.welcome}>Welcome to React Native!</Text>*/}
                    {/*<Text style={styles.instructions}>To get started, edit App.js</Text>*/}
                    {/*<Text style={styles.instructions}>{instructions}</Text>*/}
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.loginContainer}>
                        <StatusBar
                            barStyle='light-content'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Username or Email"
                            placeholderTextColor='rgb(44, 62, 80)'
                            returnKeyType="next"
                            autoCapitalize='none'
                            onChangeText={(username) => this.setState({ username })}
                            value={this.state.username}
                            onSubmitEditing={() => this.passwordInput.focus()}>
                        </TextInput>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor='rgb(44, 62, 80)'
                            returnKeyType="go"
                            secureTextEntry
                            keyboardType='email-address'
                            autoCapitalize='none'
                            autoCorrect={false}
                            ref={(input) => this.passwordInput = input}
                            value={this.state.password}
                            onChangeText={(password) => this.setState({ password })}>
                        </TextInput>

                        <TouchableOpacity style={styles.buttonContainer}
                                          onPress={() => this.login()}>
                                          {/*// onPress={() => this.props.navigation.push('Home')}>*/}
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>

                        <Button
                            title='Register Here'
                            color='rgb(231, 76, 60)'
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgba(26, 188, 156,1.0)',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        color: '#FFF',
        fontFamily: 'Thonburi-Bold',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.8,
    },
    formContainer: {
        justifyContent: 'center',
        flexGrow: 1
    },
    loginContainer: {
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgb(189, 195, 199)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: 'rgb(231, 76, 60)',
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    },
});

const mapStateToProps = state => ({
    // isLoggedIn:state.auth.isLoggedIn,
    // isLoading:state.auth.isLoading,
    // userData:state.auth.userData,
    // error:state.auth.error
});

const mapDispatchToProps = dispatch => ({
    // login:(email,password) => dispatch(actions.login({email,password}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
