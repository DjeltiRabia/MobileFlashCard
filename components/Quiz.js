import React, {  useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import AddCard from "./AddCard";
import {deleteDeck} from '../actions'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import {removeDeck} from '../utils/api'
import QuizCard from './QuizCard'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers';

  function Quiz({ navigation, route, decks, dispatch}) {
    const {title}=route.params
   const questions= decks[title].questions
    useEffect(() => {
      console.log('questionLength', questions.length ),
      questions.length === 0 && navigation.navigate('QuizEmpty', {title:title})
      clearLocalNotification().then(setLocalNotification);

    }, []);
    const score = {correct:0, incorrect:0}
  return (
    <View style={styles.container}>
      {console.log('initial score: ', score)}
      {questions.length !== 0 && navigation.navigate('QuizCard', {title:title, index:0, score})}
        </View>
  );
}

function mapStateToProps(decks) {
  return {
    decks
  };
}
export default connect(mapStateToProps)(Quiz);


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
  androidAnswertBtn: {
   // backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    // height: 50,
    // width: 300,
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
  },
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
