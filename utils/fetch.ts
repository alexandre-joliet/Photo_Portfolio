import cloudinary from "./cloudinary";
import { AllFoldersFetchResult, CategoryFoldersFetchResult, ImagesFetchResult, ImageProps } from "./types";

const handleFetch = {
 fetchAllImages : async (tag: string): Promise<ImagesFetchResult> => {
  try {
    const results = await cloudinary.v2.search
      .expression(`tags=${tag}`)
      .sort_by("public_id", "asc")
      .max_results(400)
      .execute();
  
      // console.log(results);
  
      if (results.total_count != 0) {
        let folderName: string = results.resources[0].asset_folder;
        const splitFolderName = folderName.split('/');
        folderName = splitFolderName[splitFolderName.length - 1]
    
        let imagesArray: ImageProps[] = [];
    
        let i = 0;
        for (let result of results.resources) {
          imagesArray.push({
            id: i,
            asset_id: result.asset_id,
            public_id: result.public_id,
            height: result.height,
            width: result.width,
            url: result.secure_url,
          });
          i++;
        }
        return { folderName, imagesArray };
      } else {
        return { folderName: '', imagesArray: [] };
      }
    
  } catch (error) {
    console.log("Une erreur est survenue :", error)
    throw new Error("Failed to fetch images");
  }
},

fetchAllFolders: async (): Promise<AllFoldersFetchResult> => {
  try {
    const results = await cloudinary.v2.api.sub_folders(`photography`);
    return (results)

  } catch (error) {
    console.log("Une erreur est survenue :", error)
    return {folders: []}
    // throw new Error("Failed to fetch folders");
  }
},

fetchAllFoldersFromCategory: async (category: string): Promise<CategoryFoldersFetchResult> => { 
  try {
    const results = await cloudinary.v2.api.sub_folders(`photography/${category}`);
    // console.log(results)
    return results;
    
  } catch (error) {
    console.log("Une erreur est survenue :", error)
    return {folders: []}
    // throw new Error("Failed to fetch folders");
  }
  },
}

export default handleFetch;