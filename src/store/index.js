import { createStore } from 'vuex'

import authModule from './modules/auth/index.js'
import noteModule from './modules/notes/index'

const store = createStore({
    modules: {
        authModule,
        noteModule
    },
    state() {
        return {
            userId: 'c3'
        }
    },
    getters: {
        userId(state) {
            return state.userId
        }
    }
})

export default store