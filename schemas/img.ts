import { defineField, defineType } from "sanity";

export default defineType({
    name: 'img',
    title: 'img',
    type: 'document',
    fields: [
        defineField({
            name:"name", 
            title: "Name of pic",
            type: "string",
                  }),



                  defineField({ name: "simg",
                  title: "Studen image",
                  type: "image",
                  options: {
                    hotspot: true,
        }}),
    ],
    
    preview: {
        select: {
          title: 'name',
          media: 'Studen image',
        },
       
      },
    })