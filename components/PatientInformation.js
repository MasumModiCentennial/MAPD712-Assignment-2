/*
Name: Masum Modi and Manoj Manikantan Muralidharan
Assignment: Milestone 2: Prototype, interface implementation, implementing selected functionality
Group No: 6
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import maleAvatarIcon from '../src/images/ic_avatar_male.png'
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';

export default function PatientsList({ navigation }) {
    return (
        <View style={styles.containerBody}>
            <StatusBar style="auto" />
            <View style={styles.containerForm}>
                <View style={styles.containerInput}>
                    <View style={styles.containerImage}>
                        <Image style={styles.imageIcon} source={maleAvatarIcon} />
                    </View>
                    <Text style={styles.labelPatientName}>John Snow</Text>
                </View>
                <View style={styles.containerInformation}>
                    <Text style={styles.labelHeadings}>Email Id : </Text>
                    <Text style={styles.labelPatientInfo}>Johnsnow@gmail.com</Text>
                </View>
                <View style={styles.containerInformation}>
                    <Text style={styles.labelHeadings}>Phone Number : </Text>
                    <Text style={styles.labelPatientInfo}>+1 226 776 3389</Text>
                </View>
                <View style={styles.containerInformation}>
                    <Text style={styles.labelHeadings}>Age : </Text>
                    <Text style={styles.labelPatientInfo}>30</Text>
                </View>
                <View style={styles.containerInformation}>
                    <Text style={styles.labelHeadings}>Blood Group : </Text>
                    <Text style={styles.labelPatientInfo}>A+</Text>
                </View>
                <View style={styles.containerInformation}>
                    <Text style={styles.labelHeadings}>Address : </Text>
                    <Text style={styles.labelPatientInfo}>46, Spruce Street, Waterloo, ON</Text>
                </View>
                <TouchableOpacity style={styles.containerButton}>
                    <Text style={styles.buttonText}>View Records</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerBody: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerForm: {
        flex: 1,
        margin: 10,
        alignItems: 'center'
    },
    containerImage: {
        alignItems: "center",
        padding: 20
    },
    imageIcon: {
        width: 90,
        height: 90,
    },
    labelPatientName: {
        fontSize: 18,
        color: '#78909c',
        fontWeight: '700',
    },
    containerInput: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 0.7,
        borderBottomColor: '#78909c',
    },
    containerInformation: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between'
    },
    labelHeadings: {
        alignItems: 'flex-start',
        fontSize: 16,
        color: '#78909c',
        fontWeight: '700',
    },
    labelPatientInfo: {
        alignItems: 'flex-end',
        fontSize: 14,
        color: '#78909c',
        fontWeight: '400',
    },
    containerButton: {
        backgroundColor: '#4dd0e1',
        borderRadius: 5,
        marginTop: 150,
        marginLeft: 40,
        marginRight: 40,
        padding: 15,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});