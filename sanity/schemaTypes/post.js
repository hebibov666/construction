
export const post = {
  name: 'post',
  title: 'Əl işi əlavə et',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Açıqlama',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Növü',
      type: 'string',
      options:{
        list:["Tikinti","Təmir","Dizayn","Dekorativ incəsənət","Lepka-paduqa"]
      }
    },
    {
      name: 'mainImage',
      title: 'Şəkil',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    },
    {
      name: 'publishedAt',
      title: 'Yayımlanma tarixi',
      type: 'datetime',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
}
