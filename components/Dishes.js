import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const Dishes = props => {
    return (
        <View style={styles.container}>
            <Image source={props.imageSrc} style={styles.dishPic}></Image>
            <Text style={styles.dishText}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "left",
        flexDirection: "column",
        marginRight: 15,
        marginVertical: -15,
    },
    dishPic: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginHorizontal: 6,
    },
    dishText: {
        fontSize: 14,
        marginVertical: 10,
        marginRight: 25,
        marginLeft: 25,
    }
})

export default Dishes;
