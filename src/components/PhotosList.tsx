import { FC } from "react";
import PhotoCard from "./PhotoCard";
import { Card } from "../types";

interface PhotosListProps {
  photos: Card[];
}

const PhotosList: FC<PhotosListProps> = ({ photos }) => {
  return (
    <ul>
      {photos &&
        photos.map((page) => {
          return (
            <li key={page.id} className="mb-10">
              <PhotoCard card={page} />
            </li>
          );
        })}
    </ul>
  );
};

export default PhotosList;
