import db from "./db";

export async function fetchStadiums() {
  try {
    const stadiums = await db.stadium.findMany({
      select: {
        id: true, 
        location: true
      }
    });
    return stadiums
  } catch(e) {
    console.error(e);
  }  
}

export async function fetchCategories() {
  try {
    const categories = await db.category.findMany({
      select: {
        id: true, 
        name: true
      }
    });
    return categories
  } catch(e) {
    console.error(e);
  }  
}