import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  
} from "react-native";


  function QuizEmpty({ navigation, route}) { 
    const  {title}=route.params
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Deck', {title:title})}
        style={
         styles.androidAnswertBtn
        }
      >
        <Text style={{color: 'red', fontSize: 22, textAlign: "center" }}>
            Sorry! You cannot take a quiz because there are no cards in the deck 
        </Text>
      </TouchableOpacity>
    </View>
    );
}

export default QuizEmpty


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
  viewPager: {
    flex: 1,
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
