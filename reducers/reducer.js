import {RECIEVE_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD }   from '../actions'

function decks (state={}, action) {

    switch (action.type){
        case RECIEVE_DECKS :
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK :
            const x= { title: action.title, questions:[]}
        
            return {
                ...state,
              [action.title]: x
                
            }
        case DELETE_DECK :
            const { id } = action;
            const { [id]: value, ...remainingDecks } = state;
            return remainingDecks;
        
        case ADD_CARD:
            const {title,card} = action
            //const card= {answer:a, question: q}
           
            return{
                ...state,
                [title]: {
                  ...state[title],
                  questions: [...state[title].questions].concat(card)
                }

            }
        
        default: 
        return state
    }
}

export default decks