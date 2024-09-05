import { StaticImageData } from "next/image";

export type ImagesFetchResult = {
  folderName: string;
  imagesArray: ImageProps[];
};

export type FolderProps = {
    name: string;
    path: string;
    external_id: string;
};

export type AllFoldersFetchResult = {
  folders : FolderProps[]
};

export type CategoryFoldersFetchResult = {
  folders : FolderProps[]
};

export type PhotoDisplayProps = {
  data: {
    folderName: string;
    imagesArray: ImageProps[];
  };
};

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