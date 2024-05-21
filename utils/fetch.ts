import cloudinary from "./cloudinary";
import { ImageProps } from "./types";

const handleFetch = {
 fetchAllImages : async (tag: string) => {
  const results = await cloudinary.v2.search
    .expression(`tags=${tag}`)
    .sort_by("public_id", "asc")
    .max_results(400)
    .execute();

    // console.log(results);

    let folderName: string = results.resources[0].folder;
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
      })
    }
;    
  return { folderName, imagesArray };
},
}

export default handleFetch;