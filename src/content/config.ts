import { z } from "astro/zod";
import { defineCollection } from "astro:content";
import { notionLoader } from "notion-astro-loader";
import {
  notionPageSchema,
  propertySchema,
  transformedPropertySchema,
} from "notion-astro-loader/schemas";
import { NOTION_API_TOKEN } from "astro:env/server"
import { NOTION_DATABASE_ID } from "astro:env/client"

const database = defineCollection({
  loader: notionLoader({
    auth: NOTION_API_TOKEN,
    database_id: NOTION_DATABASE_ID,
    // Use Notion sorting and filtering
  }),
  schema: notionPageSchema({
    properties: z.object({
      // Converts to a primitive string
      Fecha: transformedPropertySchema.date,
      // Converts to a Notion API created_time object
      Idea: propertySchema.title,
      Plataformas: propertySchema.multi_select,
      Tipo: propertySchema.multi_select,
      Estado: propertySchema.select,
      Cover: propertySchema.checkbox,
      Pilares: propertySchema.multi_select,
      Valor: propertySchema.multi_select,
      Meta: propertySchema.multi_select,
      slug: propertySchema.rich_text,
      Editando: propertySchema.people,
      URL: propertySchema.url,
      Sponsor: propertySchema.select,
      Notas: propertySchema.rich_text,

    }),
  }),
});

const mydb = defineCollection({
  loader: notionLoader({
    auth: '',
    database_id: '',
  }),
})

export const collections = { database, mydb };