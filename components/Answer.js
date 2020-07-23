import React, {  useEffect } from "react";
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


  function Answer({ navigation, route, decks, dispatch}) {
    const {title, index, score}=route.params
    const questions= decks[title].questions 
    
    return (
    <View style={styles.container}>
     
     <Text style={{color: 'gray', fontSize: 48, textAlign: "center"}}>

      { questions.length !== 0 && questions[index].answer}
    </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Quiz", {title:title}, score)}
        style={
         styles.androidAnswertBtn
        }
      >
        <Text style={{color: 'red', fontSize: 22, textAlign: "center" }}>Question</Text>
        </TouchableOpacity>
        <TouchableOpacity

onPress={() => {
    score.correct= score.correct+1
    if (index +1 < questions.length ) {
        navigation.navigate("QuizCard", {title, index: index+1, score})            
    } 
     else
     navigation.navigate("QuizResult", {title, score})

    }}
style={
  styles.androidSubmitBtn
}
>
<Text style={styles.btnTextDeck}>Correct</Text>
</TouchableOpacity>

<TouchableOpacity
onPress={() => { 
score.incorrect= score.incorrect+1 
 if (index +1 < questions.length ) {
        navigation.navigate("QuizCard", {title, index: index+1, score})            
    } 
     else
     navigation.navigate("QuizResult", {title, score})

    }
}
style={
styles.androidDeleteBtn
} >
  <Text style={styles.deleteText}>
 Incorrect
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
export default connect(mapStateToProps)(Answer);


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
  }
});
