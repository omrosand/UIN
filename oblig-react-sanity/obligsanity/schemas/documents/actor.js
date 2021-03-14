const actor = {
    title: 'Actor',
    name: 'actor',
    type: 'document',
    fields: [
        {
            name: 'actor',
            type: 'string',
            title: 'Actor',
            validation: (Rule) => Rule.required()
        }
    ]
}

export default actor;