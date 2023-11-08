export interface Card {
  id: number;
  title?: string;
  description?: string;
  image?: string;
}

export interface PhotoCardProps {
  card: Card;
}

export interface DataItem {
  data: Card[];
}

export interface PhotoListData {
  data?: [];
}

export interface PhotosListProps {
  list: PhotoListData;
}
