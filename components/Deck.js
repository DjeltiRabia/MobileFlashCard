import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AddCard from "./AddCard";
import {deleteDeck} from '../actions'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import {removeDeck} from '../utils/api'


  function Deck({ navigation, route, decks, dispatch}) {
    const {title}=route.params
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 32, textAlign: "center" }}>{title}</Text>
     <Text style={{color: 'gray', fontSize: 22, textAlign: "center"}}>{decks[title].questions.length + ' cards' }</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("AddCard",  {title: title})}
        style={
           styles.androidSubmitBtn
        }
      >
        <Text style={styles.btnTextDeck}>Add Card</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Quiz",  {title: title})}
        style={
           styles.androidSubmitBtn
        }
      >
        <Text style={styles.btnTextDeck}>Start Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => {removeDeck(title), dispatch(deleteDeck(title)), navigation.navigate("DeckList")}}
      style={
        styles.androidDeleteBtn
       
      } >
          <Text style={styles.deleteText}>
          Delete Deck
          </Text>
      </TouchableOpacity>
    </View>
  );
}

function mapStateToProps(decks) {
  return {
    decks
  };
}
export default connect(mapStateToProps)(Deck);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
  iosSubmitBtn: {
    backgroundColor: "#00cec9",
    padding: 10,
    borderRadius: 7,
    height: 50,
    width: 300,
    marginLeft: 50,
    marginRight: 50,
    margin: 10,
  },
  androidSubmitBtn: {
    backgroundColor: "#00cec9",
    padding: 10,
    borderRadius: 5,
    height: 50,
    width: 300,
    marginLeft: 50,
    marginRight: 50,
    //alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  btnTextDeck: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
  },
  btnTextCard: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 100,
  },
  
  androidDeleteBtn: {
    backgroundColor: "#d63031",
    padding: 10,
    borderRadius: 5,
    height: 50,
    width: 300,
    marginLeft: 50,
    marginRight: 50,
    //alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  iosDeleteBtn: {
    backgroundColor: "#d63031",
    padding: 10,
    borderRadius: 7,
    height: 50,
    width: 300,
    marginLeft: 50,
    marginRight: 50,
    margin: 10,
  },

  deleteText:{
    color: "white",
    fontSize: 22,
    textAlign: "center",
  }
});
