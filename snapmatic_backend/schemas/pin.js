export default {
    name: 'pin',  //a pin is a small image posted in the feed
    title: 'Pin',
    type: 'document',
    fields:[
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'about',
            title: 'About',
            type: 'string',
        },
        {
            name: 'destination',
            title: 'Destination',
            type: 'url',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options:{
                hotspot: true  //what parts of the image should be cropped or not
            }
        },
        {
            name: 'userId',
            title: 'UserID',
            type: 'string',
        },
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',  //reference to another document in DB
        },
        {
            name: 'save',  //a pin can be saved by many users
            title: 'Save',
            type: 'array',
            of:[{type:'save'}]  //a lot of different saves in this array
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of:[{type:'comment'}]  //a lot of different comments in this array
        },
    ]
}