import { createStore } from 'redux';

const defaultState = {
    test: 'hola mundo!',
};

function reducer(state = defaultState, action) {
    switch(action.type) {
        default:
            return state;
    }
}

const store = createStore(reducer);
const state = store.getState();

console.log(state);
