export const RECIEVE_DECKS = 'RECIEVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const GET_DECKS = 'GET_DECKS'
export const DELETE_DECK = 'DELETE_DECK'
export const ADD_CARD = 'ADD_CARD'


export function recieveDecks(decks){
    return {
        type: RECIEVE_DECKS,
        decks
    }
}

export function addDeck(title){
    return{
        type: ADD_DECK,
        title
    }
}

export function deleteDeck(id){
    return {
        type: DELETE_DECK,
        id
    }
}

export function addCard(title, card){
    return{
        type: ADD_CARD,
        title,
        card
    }
}

