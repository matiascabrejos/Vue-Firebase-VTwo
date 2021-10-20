export default {
    notes(state) {
        return state.notes
    },
    hasNotes(state) {
        return state.coaches && state.coaches.length > 0
    },
}