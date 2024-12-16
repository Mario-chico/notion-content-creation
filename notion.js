import { Client } from "@notionhq/client";
import { NOTION_API_TOKEN } from "astro:env/server"
const notion = new Client({
    auth: NOTION_API_TOKEN,
  });
  export async function getDatabase(databaseId) {
    try{
      const response = await notion.databases.query({
        database_id: databaseId,
        page_size: 50,
      });
      return response.results
    }catch(e){
      console.log(e)
    }
  }

  export async function getPages(pagesId){
    const page = await notion.pages.retrieve({
      page_id: pagesId,
    });
    
    return page;
  }

  export async function getBlock(blockId) {
    
    const response = await notion.blocks.retrieve({
      block_id: blockId,
    });
    if(response.has_children){
      const children = await notion.blocks.children.list({
        block_id: blockId,
      });
      response.children = children.results
    }
    return response
  }