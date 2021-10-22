import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            notes: [
                {
                    id: 'c1',
                    title: 'This is a title',
                    description: 'This is a description',
                    importance: ['Really Important', 'Important', 'Not That Important']
                },
                {
                    id: 'c1',
                    title: 'This is a title 2',
                    description: 'This is a description 2',
                    importance: ['Really Important', 'Important', 'Not That Important']
                }
            ]
        }       
    },
    mutations,
    actions,
    getters
}