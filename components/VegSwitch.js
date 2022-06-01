import React, {useState} from 'react';
import {View, StyleSheet, Switch, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const VegSwitch = () => {

    const [isEnabledVeg, setIsEnabledVeg] = useState(false);
    const [isEnabledNonVeg, setIsEnabledNonVeg] = useState(false);
    const toggleSwitchVeg = () => setIsEnabledVeg(previousState => !previousState);
    const toggleSwitchNonVeg = () => setIsEnabledNonVeg(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row"}}>
                <Switch
                    trackColor={{ false: "#fff", true: "#81b0ff" }}
                    thumbColor={isEnabledVeg ? "#fff" : "#81b0ff"}
                    ios_backgroundColor="#fff"
                    onValueChange={toggleSwitchVeg}
                    value={isEnabledVeg}
                    style={styles.vegToggle}
                />
                <Text style={{marginTop:5, marginLeft:10}}>Veg</Text>
            </View>

            <View style={{flexDirection: "row", marginHorizontal: 20}}>
                <Switch
                    trackColor={{ false: "#fff", true: "#fe6d73" }}
                    thumbColor={isEnabledNonVeg ? "#fff" : "#fe6d73"}
                    ios_backgroundColor="#fff"
                    onValueChange={toggleSwitchNonVeg}
                    value={isEnabledNonVeg}
                    style={styles.vegToggle}
                />
                <Text style={{marginTop:5, marginLeft:10}}>Non-Veg</Text>
            </View>

            <View style={{flexDirection: "row", marginHorizontal: 2}}>
                <Text style={styles.calendarText}>{new Date().toDateString().slice(3)}</Text>
                <View style={{backgroundColor: "#fff", padding: 5, borderRadius: 10, marginTop: -5}}>
                    <Ionicons name="calendar-outline" size={24} color="#1e6091" />
                </View>
            
            </View>
       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "left",
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 15,
    },
    calendarText: {
        marginTop:5, 
        marginHorizontal:10, 
        color:"#184e77", 
        fontWeight:"bold",
    }
})

export default VegSwitch;
