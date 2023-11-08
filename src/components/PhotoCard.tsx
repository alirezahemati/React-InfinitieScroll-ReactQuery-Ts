import { FC } from "react";
import CardLoader from "./common/CardLoader";
import { PhotoCardProps } from "../types";

const PhotoCard: FC<PhotoCardProps> = ({ card }) => {
  const { title, description, image } = card;

  const handleTextLength = (text: string | undefined) => {
    if (!text) return;
    return text.substring(0, 200);
  };

  if (!card) {
    <CardLoader />;
  }

  return (
    <div className="bg-slate-700 transition duration-500 rounded-lg shadow-lg p-5 max-w-md w-full mx-auto">
      <img src={image} className="w-full h-60 rounded-lg mb-10" />
      <p className=" text-white font-bold mb-5 capitalize transition duration-500">
        {title || ""}
      </p>
      <p className="text-white capitalize text-justify transition duration-500">
        {handleTextLength(description)}
      </p>
    </div>
  );
};

export default PhotoCard;
