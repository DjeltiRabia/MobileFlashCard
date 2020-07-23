import {AsyncStorage} from 'react-native'
import {DECKS_STORAGE_KEY, setInitialData} from './_decks'
import React, { Component, useState, useEffect } from "react";


export async function fetchDecksResults (){
    var value= await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(setInitialData)
   // value=JSON.parse(value)
    return value
}

export  async function getDecks (){
    
    var value
    // getDecks: return all of the decks along with their titles, questions, and answers.
    try {
          await AsyncStorage.getItem(DECKS_STORAGE_KEY).then(
              (decks)=> value= JSON.parse(decks)
          )
        }
    catch (error) 
    {
       console.log('Error: ',error);
      }
      console.log('returning deck inside getDecks:', value)
        return value
    }
    

export async function getDeck (id){
   // getDeck: take in a single id argument and return the deck associated with that id.
  
    let decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    let parsed = JSON.parse(decks)
    // save to redux store
    return parsed[id]
}

export async function getDeckInfo (id){
    // getDeck: take in a single id argument and return the deck associated with that id.
 let decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
 let parsed = JSON.parse(decks)
 let item = parsed[id]
 let len= Object.keys(item).length
 alert(len)
 return len
 
 }


export function saveDeckTitle(title){
    // saveDeckTitle: take in a single title argument and add it to the decks.
    console.log('saving new deck',title)
    const x= { title: title, questions:[]}
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]:x,
    }))

}


export function removeDeck(key){
    // removeDeck: take in a single title argument and delete it from the decks.
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results)=>{
        const data = JSON.parse(results)
        data[key] = undefined
        delete data[key]
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}

export function addCardToDeck(title, q, a){
  // addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
   return AsyncStorage.getItem(DECKS_STORAGE_KEY)
            .then((results)=>{
                const data =JSON.parse(results)
                let card= {question: q, answer:a}
                data[title].questions= data[title].questions.concat(card)
                AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
            })        
}

          
    
// getDecks: return all of the decks along with their titles, questions, and answers.
// getDeck: take in a single id argument and return the deck associated with that id.
// saveDeckTitle: take in a single title argument and add it to the decks.
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.