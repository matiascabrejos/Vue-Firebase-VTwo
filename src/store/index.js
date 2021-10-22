import { createStore } from 'vuex'

import authModule from './modules/auth/index.js'
import notesModule from './modules/notes/index'

const store = createStore({
    modules: {
        auth: authModule,
        notes: notesModule
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