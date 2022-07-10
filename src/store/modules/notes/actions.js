export default {
    async registerNote(context, data) {
        const userId = context.rootGetters.userId
        const noteData = {
            title: data.title,
            description: data.description,
            importance: data.levelImportance,
            imageLink: data.imageLink
        }

        const token = context.rootGetters.token

        const response = await fetch(process.env.VUE_APP_BASE_REGISTERNOTE_URL + token, {
          method: "POST",
          body: JSON.stringify(noteData),
        });

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
        const response = await fetch(process.env.VUE_APP_BASE_LOADNOTES_URL)

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
                    importance: responseData[key].importance,
                    imageLink: responseData[key].imageLink
                }
                notes.push(note)
            }

            context.commit('setNotes', notes)
    }
}