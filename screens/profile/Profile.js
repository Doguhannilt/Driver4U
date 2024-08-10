import React, { useEffect, useState } from 'react';
import { View, Text, TextInput,SafeAreaView, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Profile = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View className="text-sm mt-10 text-gray-600">
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                >
                    <Text>Go Back To Home</Text>
                </TouchableOpacity>
                
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Update Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.deleteButton]}>
                    <Text style={styles.deleteButtonText}>Delete Your Account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Policy And Privacy</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>History</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Github</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 16,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
    },
    button: {
        backgroundColor: '#C0C0C0', // Blue color
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    deleteButton: {
        backgroundColor: '#FF6347', // Red color
    },
    deleteButtonText: {
        color: '#fff',
    },
});

export default Profile;