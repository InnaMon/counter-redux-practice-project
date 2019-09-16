const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter++
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
};

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Dispatching Action

store.dispatch({type: 'INC_COUNTER'}); //incremenets by one
store.dispatch({type: 'ADD_COUNTER', value: 10}); //adds specific number to counter, value needs to be passed down along with type
console.log(store.getState());

//Subscription