import type { Rule } from "sanity";

// const categories = [
//     {
//         title: 'tech',
//         value: 'tech'
//     },
//     {
//         title: 'hardware',
//         value: 'hardware'
//     },
//     {
//         title: 'photography',
//         value: 'photography'
//     },
//     {
//         title: 'canon',
//         value: 'canon'
//     },
//     {
//         title: 'tablets',
//         value: 'tablets'
//     },
//     {
//         title: 'gadgets',
//         value: 'gadgets'
//     },
//     {
//         title: 'samsung',
//         value: 'samsung'
//     },
//     {
//         title: 'smartphones',
//         value: 'smartphones'
//     },
//     {
//         title: 'code',
//         value: 'code'
//     },
//     {
//         title: 'security',
//         value: 'security'
//     },
//     {
//         title: 'drones',
//         value: 'drones'
//     },
//     {
//         title: 'vr',
//         value: 'vr'
//     },
// ]
export const articles = {
    name: 'article',
    title: 'Article',
    type: 'document',

    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: Rule) => Rule.required() 
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name'}
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
        // {
        //     name: 'category',
        //     title: 'Category',
        //     type: 'string',
        //     options: {
        //         list: categories
        //     },
        //     initialValue: 'daily digest'
        // },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string'}],
            options: {
                layout: 'tags'
            }
        },
        {
            name: 'date',
            title: 'Date',
            type: 'datetime'
        },
        {
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true // allows us to resize image during upload
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }   
            ]
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block'}]
        },
    ]
}