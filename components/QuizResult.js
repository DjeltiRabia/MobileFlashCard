import React, {  useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

  function QuizResult({ navigation, route, decks, dispatch}) {
    const {title, score}=route.params
    const scoreReset={correct:0, incorrect:0}
   const questions= decks[title].questions
    useEffect(() => {
      console.log('questionLength', questions.length ),
      questions.length === 0 && navigation.navigate('QuizEmpty', {title:title})
    });

  return (

    <View style={styles.container}>
              {console.log('final score: ', score)}
        <Text style={{color: 'black', fontSize: 32, textAlign: "center" }}>
             Quiz Complete!</Text>
       <Text style={{color: 'red', fontSize: 28, textAlign: "center"}}>
      {score.correct}/{questions.length} Correct!
      </Text>
      <Text style={{color: 'black', fontSize: 32, textAlign: "center"}}>
      Pecentage correct
      </Text>
      <Text style={{color: 'red', fontSize: 28, textAlign: "center"}}>
      {score.correct/questions.length *100 +'%'}
      </Text>
      <TouchableOpacity
        onPress={() => { 
             navigation.navigate("QuizCard", {title:title, index: 0, score:scoreReset})

            }}
        style={
          styles.androidSubmitBtn
        }
      >
        <Text style={styles.btnTextDeck}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('Deck', {title})}
        style={
          styles.androidSubmitBackBtn
        }
      >
        <Text style={styles.btnTextDeck}>Back to Deck</Text>
      </TouchableOpacity>
        </View>
  );
}

function mapStateToProps(decks) {
  return {
    decks
  };
}
export default connect(mapStateToProps)(QuizResult);


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
  androidSubmitBackBtn: {
    backgroundColor: "gray",
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
