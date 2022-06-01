import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import SearchBar from './components/SearchBar';
import Location from './components/Location';
import VegSwitch from './components/VegSwitch';
import Dishes from './components/Dishes';
import Chefs from './components/Chefs';
import NearbyChef from './components/NearbyChef';


const {width:SCREEN_WIDTH, height:SCREEN_HEIGHT} = Dimensions.get("window");

const indianDish = require('./assets/indian.jpg');
const italianDish = require('./assets/italian.jpg');
const mexicanDish = require('./assets/mexican.jpg');
const japaneseDish = require('./assets/japanese.jpg');
const koreanDish = require('./assets/korean.jpg');
const russianDish = require('./assets/russian.jpg');
const vietnameseDish = require('./assets/vietnamese.jpg');

const chef1 = require('./assets/chef1.jpg');
const chef2 = require('./assets/chef2.jpg');
const chef3 = require('./assets/chef3.jpg');
const chef4 = require('./assets/chef4.jpg');


export default function App() {

  return (
    <View style={styles.container}>
        <Location />
        <SearchBar />
        <VegSwitch />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          <View style={styles.foodScroll}>
            <Dishes imageSrc={indianDish} title={"Indian"}/>
            <Dishes imageSrc={italianDish} title={"Italian"}/>
            <Dishes imageSrc={mexicanDish} title={"Mexican"}/>
            <Dishes imageSrc={japaneseDish} title={"Japanese"}/>
            <Dishes imageSrc={koreanDish} title={"Korean"}/>
            <Dishes imageSrc={russianDish} title={"Russian"}/>
            <Dishes imageSrc={vietnameseDish} title={"Vietnamese"}/>
          </View>
        </ScrollView> 

        <View style={styles.topRated}>
          <Text style={styles.topRatedText}>Top Rated</Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView2}>
            <Chefs imageSrc={chef1} name={"Gordon Ramsayiski"} nationality={"Italian"} location={"California"} capacity={"Min-8, Max-15"} price={"$500/person"}/>
            <Chefs imageSrc={chef2} name={"Cassandra Kim"} nationality={"Canada"} location={"Vancouver"} capacity={"Min-2, Max-8"} price={"$200/person"}/>
            <Chefs imageSrc={chef3} name={"Hazel Smith"} nationality={"China"} location={"Beijing"} capacity={"Min-4, Max-10"} price={"$400/person"}/>
            <Chefs imageSrc={chef4} name={"Wagna Washington"} nationality={"USA"} location={"Seattle"} capacity={"Min-2, Max-14"} price={"$300/person"}/>
          </ScrollView>
        </View>

        <View style={styles.nearby}>
          <Text style={styles.topRatedText}>Nearby</Text>
          
          <View>
            <NearbyChef imageSrc={chef4} name={"Wagna Washington"} nationality={"USA"} location={"Seattle"} capacity={"Min-2, Max-14"} price={"$300/person"} desc={"Seattle based chef, restaurateur, television personality, food writer"}/>
          </View>
        </View>
      
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6ccc2',
    paddingVertical: 20,
    position: 'relative',
  },
  scrollView: {
    position: 'absolute',
    top: 220,
    left: -20,
    marginLeft: 30,
  },
  foodScroll: {
    flexDirection:'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  topRated: {
    position: 'absolute',
    top: 380,
    left: -5,
    marginLeft: 15,
    height: 235, 
  },
  topRatedText: {
    fontSize: 18,
  },
  scrollView2: {
    marginVertical: 20,
  },
  nearby: {
    position: 'absolute',
    top: 620,
    left: -5,
    marginLeft: 15,
    width: 385,
    height: 235, 
  },


});
