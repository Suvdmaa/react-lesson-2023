import { useContext } from "react";
import Book from "./Book";
import { DataContext } from "../contexts/BookContext";

export default function Books() {
  const list = useContext(DataContext);
  return (
    <ul>
      {list.map((item, index) => {
        return <Book key={index} item={item} />;
      })}
    </ul>
  );
}
