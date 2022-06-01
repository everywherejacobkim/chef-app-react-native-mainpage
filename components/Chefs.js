import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const Chefs = props => {
    return (
        <View style={styles.chefContainer}>
            <View>
                <Image source={props.imageSrc} style={styles.chefPic}></Image>
                <View style={styles.bookNow}>
                    <Text style={styles.chefText}>Book Now</Text>      
                </View>
            </View>
            <View style={{marginTop:5}}>
                <Text style={styles.chefNameText}>{props.name}</Text>
                <View style={{flexDirection: "row", marginLeft:2, marginTop:10, marginBottom:5}}>
                    <MaterialCommunityIcons name="origin" size={14} color="#d88c9a" />
                    <View style={{marginLeft:10}}>
                        <Text>{props.nationality}</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row", marginLeft:2, marginVertical:5}}>
                    <Ionicons name="location-outline" size={14} color="#277da1" />
                    <View style={{marginLeft:10}}>
                        <Text>{props.location}</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row", marginLeft:2, marginVertical:5}}>
                    <Ionicons name="md-people-outline" size={14} color="black" />
                    <View style={{marginLeft:10}}>
                        <Text>{props.capacity}</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row", marginLeft:2, marginVertical:5}}>
                <Foundation name="dollar-bill" size={14} color="#354f52" />
                    <View style={{marginLeft:10}}>
                        <Text>{props.price}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    chefContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#6c757d',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        padding: 10,
    },
    chefPic: {
        width: 100,
        height: 100,
        marginHorizontal: 6,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    bookNow: {
        backgroundColor: "pink",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: 100,
        height: 35,
        marginLeft: 6,
        marginTop: 3,
    },
    chefText: {
        textAlign: 'center',
        alignItems: "center",
        marginTop: 7,
        color: "#277da1",
        fontWeight: "bold",
    },
    chefNameText: {
        color: "#277da1",
        fontWeight: "bold",
    },

})

export default Chefs;
