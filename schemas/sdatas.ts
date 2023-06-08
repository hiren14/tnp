import { defineField, defineType } from "sanity";

export default defineType({
    name: 'sdatas',
    title: 'sdatas',
    type: 'document',
    fields: [
        defineField({
            name:"name", 
            title: "Name of students",
            type: "string",
                  }),



                  defineField({ name: "simg",
                  title: "Studen image",
                  type: "image",
                  options: {
                    hotspot: true,
        }}),
          defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "name",
              maxLength: 96,
            },
          }),
          defineField({   name: "position",
          title: "Position",
          type: "string",}),

          defineField({    name: "package",
          title: "Package",
          type: "string",   }),
    
    defineField({  
         name: "year",
    title: "Year Of Placed",
    type: "string",   }),

defineField({    name: "linkedln",
title: "Linkedln Links",
type: "string",  }),


],
    
    preview: {
        select: {
          title: 'name',
          author: 'author.name',
          media: 'mainImage',
        },
        prepare(selection) {
          const {author} = selection
          return {...selection, subtitle: author && `by ${author}`}
        },
      },
    })