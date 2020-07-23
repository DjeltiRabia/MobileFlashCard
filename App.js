import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import {connect} from 'react-redux'
import { createStackNavigator } from "@react-navigation/stack";
import AddDeck from './components/AddDeck'
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import DeckList from './components/DeckList'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {fetchDecksResults} from './utils/api'
import {getDecks} from './utils/api'
import {getDeck} from './utils/api'
import {getDeckInfo} from './utils/api'
import reducer from './reducers/reducer'
import { recieveDecks } from "./actions";
import QuizEmpty from './components/QuizEmpty';
import QuizCard from './components/QuizCard';
import QuizResult from './components/QuizResult';
import {setLocalNotification} from './utils/helpers'
import Answer from './components/Answer';



const Tab = createBottomTabNavigator();
const store = createStore(reducer, applyMiddleware(thunk, logger))
const DeckListStack = createStackNavigator();
const DeckStack = createStackNavigator();

function DeckScreen({route}) {
  const {title}= route.params
  return (
    <DeckStack.Navigator
    initialRouteName="Deck"
    options={{title: "Deck"}}
          screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#74b9ff" },

        }}>
      <DeckStack.Screen name="Deck" component={Deck}   initialParams={{ title: title }}/>
      <DeckStack.Screen name="AddCard" component={AddCard} initialParams={{ title: title }} />
      <DeckStack.Screen name="Quiz" component={QuizScreen}  initialParams={{ title: title }} />
    </DeckStack.Navigator>
  );
}

function QuizScreen ({route}){
  const {title}= route.params
  return (
    <DeckStack.Navigator
    initialRouteName= 'Quiz'
    options={{title: "Quiz"}}
    screenOptions={{
      headerTintColor: "white",
      headerStyle: { backgroundColor: "#74b9ff" },

    }}>
  <DeckStack.Screen name="Quiz" component={Quiz} options={{title: "Quiz"}} initialParams={{ title: title }}/>
<DeckStack.Screen name="QuizEmpty" component={QuizEmpty} options={{title: "Quiz"}} initialParams={{ title: title }} />
<DeckStack.Screen name="QuizCard" component={QuizCard} options={{title: "Quiz"}} initialParams={{ title: title }} />
<DeckStack.Screen name="QuizResult" component={QuizResult} options={{title: "Quiz"}} initialParams={{ title: title }} />
<DeckStack.Screen name="Answer" component={Answer} options={{title: "Quiz"}} initialParams={{ title: title }} />

  
</DeckStack.Navigator>
  )
}

 function DeckListScreen() {
    return (
        <DeckListStack.Navigator
         initialRouteName="DeckList"
       //  options={{title: "Deck List"}}
          screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#74b9ff" },
        }}
      >
        <DeckListStack.Screen name="DeckList"  options={{title: "Deck List"}} component={DeckList }  />
        <DeckListStack.Screen name="DeckScreen" options={{title: "Deck"}} component={DeckScreen}   />  
      </DeckListStack.Navigator>
      
    );
  }
   
 class App extends Component{
 
  componentDidMount(){
    setLocalNotification();
   }
  render(){
   
    return (
      <Provider store={store}>
      
      <NavigationContainer>
       <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Deck List') {
                iconName = focused ? 'cards': 'cards-outline';
              } else if (route.name === 'Add Deck') {
                iconName = focused ? 'plus-box' : 'plus-box-outline';
              }
              // You can return any component that you like here!
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Deck List" component={DeckListScreen}  />
          <Tab.Screen name="Add Deck" component={AddDeck} />
        </Tab.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }
  
}
export default App;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:20
  },
});
