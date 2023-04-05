import Place from "./Place";
import { places } from "../data/Data";

export default function List() {
  return (
    <div>
      {places.map((p, index) => {
        return (
          <div>
            <Place
              key={index}
              place={p}
              id={p.id}
              name={p.name}
              description={p.description}
              imageId={p.imageId}
            />
          </div>
        );
      })}
    </div>
  );
}
