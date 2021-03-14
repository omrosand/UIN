const movie = {
    title: 'Movie',
    name: 'movie',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Movie',
            description: 'Title of movie'
        },
         {
             name: 'actor',
             type: 'reference',
             title: 'Actor',
             description: 'Actor in movie',
             to: [{type: 'actor'}]
         }
    ],
    preview: {
        select: {
          title: 'title',
          actor: 'actor.actor'
        },
        prepare(selection) {
            const {title, actor} = selection;
            return {
                title,
                subtitle: `Actor: ${actor}`
            }
        }
    }
}

export default movie;