export default {
    async registerNote(context, data) {
        const userId = context.rootGetters.userId
        const noteData = {
            title: data.title,
            description: data.description,
            importance: data.levelImportance
        }

        const token = context.rootGetters.token

        const response = await fetch(`https://fir-login-e87c1-default-rtdb.firebaseio.com/notes/${userId}.json?auth=` + token, {
            method: 'PUT',
            body: JSON.stringify(noteData)
        })

        // const responseData = await response.json()
        
        if(!response.ok) {
            // error
        }
        


        context.commit('registerNote', {
            ...noteData,
            id: userId 
        })
    },
    async loadNotes(context) {
        const response = await fetch(`https://fir-login-e87c1-default-rtdb.firebaseio.com/notes.json`)

        const responseData = await response.json()

        if(!response.ok) {
            // error
        }

            const notes = []

            for (const key in responseData) {
                const note = {
                    id: key,
                    title: responseData[key].title,
                    description: responseData[key].description,
                    importance: responseData[key].importance
                }
                notes.push(note)
            }

            context.commit('setNotes', notes)
    }
}