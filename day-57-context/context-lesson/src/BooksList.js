import Books from "./components/Books";
import { DataContextProvider } from "./contexts/BookContext";

export default function BooksList() {
  return (
    <div>
      <DataContextProvider>
        <Books />
      </DataContextProvider>
    </div>
  );
}
