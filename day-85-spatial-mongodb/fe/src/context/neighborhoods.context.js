import { createContext, useEffect, useState } from "react";

const NeighborhoodContext = createContext(null);

const NeighborhoodContextProvider = ({ children }) => {
  const ALL_NEIGHBORHOOD_URL = "http://localhost:8080/neighborhood/list";
  const [neighborhoods, setNeighborhoods] = useState([]);
  useEffect(() => {
    fetchNeighborhoods(ALL_NEIGHBORHOOD_URL);
  });

  async function fetchNeighborhoods(url) {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setNeighborhoods(FETCHED_JSON.data);
  }
  return (
    <NeighborhoodContext.Provider value={neighborhoods}>
      {children}
    </NeighborhoodContext.Provider>
  );
};

export { NeighborhoodContext, NeighborhoodContextProvider };
