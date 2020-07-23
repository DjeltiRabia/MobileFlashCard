import React, { Component, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
//import DeckScreen, from "./Deck";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getDecks, fetchDecksResults } from "../utils/api";
import { getDeck } from "../utils/api";
import { getDeckInfo } from "../utils/api";
import { recieveDecks } from "../actions";
import { ScrollView } from "react-native-gesture-handler";

function DeckList({ navigation, dispatch, decks, deckKeys }) {
  useEffect(() => {
    fetchDecksResults();
    getDecks().then((decks) => dispatch(recieveDecks(decks)));
  }, []);

  return (
    <ScrollView> 
     
            <View>
               {deckKeys.map((title) => {
                 return(
                  <TouchableOpacity
                  key={title}
                    onPress={() => {
                      navigation.navigate("DeckScreen", {title: title});
                    }}
                    style={
      
                       styles.androidSubmitBtn
                    }
                  >
                    <Text style={styles.btnTextDeck}> {title} </Text>
                    <Text style={styles.btnTextCard}>{decks[title].questions.length + ' cards' }</Text>
                  </TouchableOpacity>
                 )
           
          })    }  
          </View>  
     </ScrollView>
  );
}
function mapStateToProps(decks) {
  return {
    decks,
    deckKeys: Object.keys(decks),
  };
}
export default connect(mapStateToProps)(DeckList);


const styles = StyleSheet.create({
  iosSubmitBtn: {
    backgroundColor: "#00cec9",
    padding: 10,
    borderRadius: 7,
    height: 120,
    width: 300,
    marginLeft: 50,
    marginRight: 50,
    margin: 10,
  },
  androidSubmitBtn: {
    backgroundColor: "#00cec9",
    padding: 10,
    borderRadius: 5,
    height: 120,
    width: 300,
    marginLeft: 50,
    marginRight: 50,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  btnTextDeck: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
  },
  btnTextCard: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",

    //padding:20
  },
});
