export default{
    name: 'user', // user of the app
    title: 'User',
    type: 'document',
    fields:[
        {
            name: 'userName',
            title: 'Username',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string', // is a URL
        },
    ]
}