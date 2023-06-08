import { defineField, defineType } from "sanity";

export default defineType({
    name: 'placed',
    title: 'Placed',
    type: 'document',
    fields: [
        defineField({
            name: "companyname",
            title: "CompanyName",
            type: "string",
          }),
          defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "companyname",
              maxLength: 96,
            },
          }),
          defineField({ name: "cimg",
          title: "Company image",
          type: "image",
          options: {
            hotspot: true,
}}),
          defineField({ name: "sdatas",
          title: "Student Data",
          type: "array",
          of: [{ type: "sdatas" }],
        }),
    ],
    
    preview: {
        select: {
          title: 'companyname',
          author: 'author.name',
          media: 'mainImage',
        },
        prepare(selection) {
          const {author} = selection
          return {...selection, subtitle: author && `by ${author}`}
        },
      },
    })