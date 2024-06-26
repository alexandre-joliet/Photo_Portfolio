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

