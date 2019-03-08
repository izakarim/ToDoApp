import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, KeyboardAvoidingView, FlatList } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { connect } from 'react-redux';
import { Login } from "./Login";
import { addText, removeText } from "./actions/text";

type Props = {};
export class Home extends Component<Props> {
    constructor() {
        super();
        this.state = {
            text: '',
        };
    }

    addItem() {
        // console.log('text:',this.state.text);
        this.props.addText(this.state.text);
        this.setState({text: ''});
    }

    removeItem(index) {
        this.props.removeText(index);
    }

    // updateItem() {
    //     if (this.state.text.length === 0) {
    //         alert("Type here");
    //     }
    // }

    logout() {
        alert('You have logout!');
        this.props.navigation.push('Login');
    }

    flatListItemSeparator() {
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.homeContainer}>
                <View style={styles.container}>
                    <TextInput
                        style={{height: 50, width: '80%', borderWidth: 1, borderColor: 'black'}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        placeholder="Type here..."
                    />

                    <Button
                        onPress={() => this.addItem()}
                        title="Add"
                    />

                    <FlatList style={{ flex: 1}}
                              data={this.props.text.text}
                              itemSeparatorComponent={this.flatListItemSeparator}
                              keyExtractor={(item, index) => index.toString()}
                              renderItem={({ item, index }) => {
                                  let swipeBtns = [
                                      {
                                      text: 'Delete',
                                      backgroundColor: 'red',
                                      onPress: () => { this.removeItem(index) }
                                      },
                                      // {
                                      //     text: 'Update',
                                      //     backgroundColor: 'blue',
                                      //     onPress: () => { this.updateItem(index) }
                                      // }

                        ];
                        return (
                            <Swipeout
                                right={swipeBtns}
                                      autoClose={true}
                                      backgroundColor='transparent'>
                                <View style={{height: 50,
                                backgroundColor: '#F0F0F0',
                                width: 300,
                                alignSelf: 'center',
                                margin: 10,
                                }}>

                                 <TouchableOpacity style={styles.button}>
                                         <Text> {item} </Text>
                                 </TouchableOpacity>

                                </View>
                            </Swipeout>
                        );
                    }}
                    />
                </View>

                <View style={styles.logoutContainer}>
                    <TouchableOpacity style={styles.buttonContainer}
                                  onPress={() => this.logout()}>
                    <Text style={styles.buttonText}>LOGOUT</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgba(26, 188, 156,1.0)',
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
    logoutContainer: {
        padding: 20,
    },
    line: {
        height: 0.5,
        width: "100%",
        backgroundColor:"rgba(255,255,255,0.5)"
    },
    todoItem: {
        alignItems: 'center',
        padding: 8,
        height: 50,
        width: 320,
        borderBottomWidth: 1.5,
        borderColor: '#e0e0e0',
        backgroundColor: '#fff',
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
    }
});

const mapStateToProps = state => {
    return {
        text: state.text,
        index: state.index,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addText: (name) => {
            dispatch(addText(name))
        },
        removeText: (index) => {
            dispatch(removeText(index))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
