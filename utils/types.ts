import { StaticImageData } from "next/image";

export type ImageProps = {
  id: number;
  asset_id: string,
  public_id: string;
  height: string;
  width: string;
  url: string;
};


export type MenuItemsProps = {
  title: string,
  content: 
    {
      title: string
      url: string
    } [],
}

export type CategoryProps = {
  url: string;
  name: string;
  picture: StaticImageData;
}

// export type PhotoCategoriesProp = {
//   categories: CategoryProps[];
// }