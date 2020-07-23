import React, {Component} from 'react'
import {StyleSheet, View, Text,TextInput, TouchableOpacity, Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {Dimensions} from 'react-native'
import  { ADD_DECK, addDeck } from '../actions'
import {connect} from 'react-redux'
import { recieveDecks } from "../actions";
import {saveDeckTitle} from '../utils/api'
 function AddDeck({dispatch, navigation}){
   
  
    const [value, onChangeText] = React.useState('');

    const onPress =()=>{
        console.log('submit pressed with value:', value)
        onChangeText('')
        dispatch(addDeck(value))
        saveDeckTitle(value)
        navigation.navigate("DeckList");
    }
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>
          What is the title of your deck?        
        </Text>

        <TextInput
        style={{ height: 40, width:350,alignSelf:'center', borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
       // placeholder='lklk'
        />
        
        <TouchableOpacity 
        disabled={value === ''}
        onPress={onPress}
        style={ value === '' ? styles.androidSubmitDisabled :styles.androidSubmitBtn}>
        <Text style={styles.btnText}>
          Create Deck        
        </Text>
        </TouchableOpacity>
        </View> 
    )
}

export default connect()(AddDeck)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
        padding:5,
        
      },
    iosSubmitBtn: {
        backgroundColor: '#00cec9',
        padding: 10,
        borderRadius:7,
        height: 50,
        width: 300,
        marginLeft: 50,
        marginRight: 50,
        margin: 10
    },
    androidSubmitBtn: {
        backgroundColor: '#00cec9',
        padding: 10,
        borderRadius:5,
        height: 50,
        width: 300,
        marginLeft: 50,
        marginRight: 50,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    androidSubmitDisabled: {
      backgroundColor: '#81ecec',
      padding: 10,
      borderRadius:5,
      height: 50,
      width: 300,
      marginLeft: 50,
      marginRight: 50,
      alignSelf: 'flex-end',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10
  },
    btnText: {
        color:'white',
        fontSize:22,
        textAlign: 'center'
      },
      titleText: {
        color:'#636e72',
        fontSize:36,
        textAlign: 'center'
      },
    
  })