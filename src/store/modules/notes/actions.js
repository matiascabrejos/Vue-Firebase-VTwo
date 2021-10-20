export default {
    registerNote(context, data) {
        const noteData = {
            id: context.rootGetters.userId,
            title: data.title,
            description: data.description,
            importance: data.levelImportance
        }
        context.commit('registerNote', noteData)
    }
}