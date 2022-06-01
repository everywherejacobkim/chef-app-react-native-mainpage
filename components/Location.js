import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Location = () => {
    return (
        <View>
            <View style={styles.container}>
                <Ionicons name="location-outline" size={30} color="orange" style={styles.locationIcon} />
                <Text style={styles.locationText}>Vancouver, Canada</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: "flex-start",
    },
    locationIcon: {
        marginTop: 40,
        marginLeft: 20,
    },
    locationText: {
        marginTop: 40,
        marginLeft: 5,
    }
})

export default Location;
