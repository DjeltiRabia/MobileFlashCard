import React, {Component} from 'react'
import {StyleSheet, View, Text,TextInput, TouchableOpacity, Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {Dimensions} from 'react-native'
import {addCard} from '../actions'
import { connect } from "react-redux";
import {addCardToDeck} from '../utils/api'


 class AddCard extends Component{

    state={
        question:'', 
        answer:''
    }
    
    handleQuestion=(text)=>{
        this.setState({question:text }) 
    }
    handleAnswer=(text)=>{
        this.setState({answer:text})
    }
     onPress =()=>{
        const {title}=this.props.route.params
        const {question, answer}= this.state
        const card = {question:question, answer: answer}
        const {dispatch}= this.props
        const {navigation}= this.props
        console.log('question:', this.state.question)
        console.log('answer:', this.state.answer)
        dispatch(addCard(title, card))
        addCardToDeck(title, question, answer)
        this.handleAnswer('')
        this.handleQuestion('')
        navigation.goBack();

    } 
    render(){
        const {title}=this.props.route.params
        return(

            <View style={styles.container}>
                <Text style={{color: 'black', fontSize: 32, textAlign: "center" }}>
              {title}      
            </Text>
             <TextInput
            style={styles.input}
            onChangeText={text => this.handleQuestion(text)}
            value={this.state.question}
            placeholder='question'
            />
            <TextInput
            style={styles.input}
            onChangeText={text => this.handleAnswer(text)}
            value={this.state.answer}
            placeholder='answer'
            />
            
            <TouchableOpacity 
            onPress={this.onPress}
            style={ Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}>
            <Text style={styles.btnText}>
              Submit        
            </Text>
            </TouchableOpacity>
            </View>          
        )
    }  
}

function mapStateToProps(decks) {
    return {
      decks,
      deckKeys: Object.keys(decks),
    };
  }
  export default connect(mapStateToProps)(AddCard);

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
    btnText: {
        color:'white',
        fontSize:22,
        textAlign: 'center'
      },
      input:{
        padding: 10,
        height: 40,
        margin: 20,
        width:350,
        alignSelf:'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5
      }
  })