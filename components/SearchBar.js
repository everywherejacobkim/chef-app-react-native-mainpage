import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                {/* search Icon */}
                <Feather name="search" size={20} color="black" style={{ marginLeft: 1 }} />
                <TextInput style={{marginLeft: 15 }}>Search your favorite chef...</TextInput>
            </View>
        </View>
    );
    };
    export default SearchBar;


    const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        marginHorizontal: 7,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "98%",
    },
    searchBar: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#fff",
        borderRadius: 15,
        alignItems: "center",
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
});