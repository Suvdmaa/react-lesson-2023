import { useContext } from "react";
import { ComponentContext } from "../context/Context";
import { getImageUrl } from "../data/utils";

export default function PlaceImage({ place }) {
  const [isLarge, setIsLarge, imageSize] = useContext(ComponentContext);

  return (
    <div>
      <img
        src={getImageUrl(place)}
        alt={place.name}
        width={imageSize}
        height={imageSize}
      />
    </div>
  );
}
