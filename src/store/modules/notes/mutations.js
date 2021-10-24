export default {
    registerNote(state, payload) {
        state.notes.push(payload)
    },
    setNotes(state, payload) {
        state.notes = payload
    }
}