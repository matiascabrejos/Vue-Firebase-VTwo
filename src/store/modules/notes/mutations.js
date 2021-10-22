export default {
    registerNote(state, payload) {
        state.coaches.push(payload)
    },
    setNotes(state, payload) {
        state.notes = payload
    }
}