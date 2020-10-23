/*
Name: Masum Modi and Manoj Manikantan Muralidharan
Group No: 6
Description : Add Patient Screen
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import usernameIcon from '../src/images/ic_user.png'
import emailIcon from '../src/images/ic_email.png'
import phoneIcon from '../src/images/ic_phone.png'
import addressIcon from '../src/images/ic_address.png'
import addPatientIcon from '../src/images/ic_addPatient.png'
import { StyleSheet, TextInput, Image, TouchableOpacity, Text, View } from 'react-native';

export default function AddPatient({ navigation }) {

    return (
        <View style={styles.containerBody}>
            <StatusBar style="auto" />
            <View style={styles.containerLogo}>
                <Image style={styles.tinyLogo} source={addPatientIcon} />
            </View>
            <View style={styles.containerForm}>
                <View style={styles.containerInput}>
                    <Image style={styles.inputIcon} source={usernameIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Username'}
                        placeholderTextColor="#78909c" />
                </View>
                <View style={styles.containerInput}>
                    <Image style={styles.inputIcon} source={emailIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Email'}
                        placeholderTextColor="#78909c" />
                </View>
                <View style={styles.containerInput}>
                    <Image style={styles.inputIcon} source={phoneIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Phone Number'}
                        placeholderTextColor="#78909c" />
                </View>
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Age'}
                        placeholderTextColor="#78909c" />
                    <View style={styles.containerPicker}>
                        <select>
                            <option value="A+">A+</option>
                            <option value="B+">B+</option>
                            <option value="O+">O+</option>
                        </select>
                    </View>
                </View>
                <View style={styles.containerInput}>
                    <Image style={styles.inputIcon} source={addressIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Address'}
                        placeholderTextColor="#78909c" />
                </View>
            </View>
            <TouchableOpacity style={styles.containerButton}>
                <Text style={styles.buttonText}> Add Patient </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    containerBody: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerLogo: {
        marginTop: 20,
        alignItems: 'center',
    },
    containerForm: {
        flex: 1,
        margin: 40,
    },
    containerLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
    },
    containerInput: {
        marginTop: 30,
        flexDirection: 'row',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#78909c',
    },
    containerButton: {
        backgroundColor: '#4dd0e1',
        borderRadius: 5,
        marginLeft: 40,
        marginRight: 40,
        padding: 15,
    },
    containerPicker: {
        flex: 1,
        alignItems: "center"
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    inputIcon: {
        width: 30,
        height: 30,
    },
    title: {
        fontSize: 18,
        marginTop: 20,
        color: '#4dd0e1',
    },
    input: {
        fontSize: 18,
        marginLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        color: '#000',
    },
    dropDown: {
        fontSize: 18,
        color: '#fff'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        color: '#78909c',
    },
    signUpLabel: {
        fontSize: 16,
        color: '#4dd0e1',
        borderBottomColor: '#4dd0e1',
        borderBottomWidth: 1,
    },
});
