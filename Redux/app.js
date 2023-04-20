//import { createStore } from "redux";
const createStore = require('redux').createStore;

//*********actions */
const BUY_POKEMON = 'BUY_POKEMON';
const buy_pokemon_action = (cant) => {
    return {
        type: BUY_POKEMON,
        payload: cant
    }
}

//*********reducers */
const defaultGamesState = {
    pokemon: 10
}

const gamesReducer = (state = defaultGamesState, action) => {
    switch (action.type) {
        case BUY_POKEMON: {
            return {
                pokemon: state.pokemon - action.payload
            }
        }
        default : return state;
    }
}

//*********store */
const store = createStore(gamesReducer);

console.log ('Estado inicial: ', store.getState());

store.subscribe(()=>{
    console.log ('Cambio de estado: ', store.getState())
})

store.dispatch(buy_pokemon_action(3));