import cloudinary from "./cloudinary";
import { ImageProps } from "./types";

const handleFetch = {
 fetchAllImages : async () => {
  const results = await cloudinary.v2.search
    .expression(`folder:samples`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();

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
  return imagesArray;
},
}

export default handleFetch;