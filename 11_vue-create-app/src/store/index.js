import {createStore} from 'vuex';
import * as getters from './getters';
export default createStore({
    state: {
        dcHeros: [],
    },
    getters,
    mutations: {
        setDcHeros(state, payload) {
            state.dcHeros = payload;
        },
    },
    actions: {},
    modules: {},
});
