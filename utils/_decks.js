// utils/_calendar.js

import { AsyncStorage } from 'react-native'
import { getMetricMetaInfo, timeToString } from './helpers'

export const DECKS_STORAGE_KEY = 'flashCard:decks'



export async function setInitialData () {
  let initData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }
  //AsyncStorage.clear()

  return await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initData))
}



