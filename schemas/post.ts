import { defineField, defineType } from "sanity";

export default defineType({
    name: 'post',
    title: 'Post',
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
      defineField({
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'},
      }),
      defineField({
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
      }),
      defineField({
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      }),
      defineField({
        name: "dinter",
        title: "DATE OF INTERVIEW",
        type: "datetime",
      }),
      defineField({
        name: "dlast",
        title: " last date of registration",
        type: "datetime",
      }),  defineField({
        name: "description",
        title: "Description",
        type: "string",
      }),  defineField({
        name: "job",
        title: "Job Post",
        type: "blockContent",
      }),  defineField({
        name: "bond",
        title: " bond details",
        type: "blockContent",
      }),
      defineField({
        name: "package",
        title: "Package",
        type: "string",
      }),  defineField({
        name: "vac",
        title: "Vacancy",
        type: "string",
      }),
      defineField({
        name: "inter",
        title: "internship",
        type: "blockContent",
      }),  defineField({
        name: "loc",
        title: "Job Location",
        type: "string",
      }),  defineField({
        name: "elig",
        title: "Eligibility",
        type: "string",
      }),
      defineField({
        name: "quali",
        title: "Qualification",
        type: "string",
      }),
      defineField({
        name: "sel",
        title: "Selection Process",
        type: "blockContent",
      }),  defineField({
        name: "gurl",
        title: "Google forms",
        type: "string",
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