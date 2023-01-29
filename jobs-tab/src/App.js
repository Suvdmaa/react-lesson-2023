import React from "react"
import './App.css';
import { AiFillCaretRight } from "react-icons/ai"
import AboutFunc from "./components/AboutFunc";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const url = "https://course-api.com/react-tabs-project";
  const [data, setData] = useState();

  useEffect(() => {
    urlData();
    console.log(data)
  }, [data]);
  
  async function urlData() {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setData(FETCHED_JSON);
  }


  return (
    <div>
      {data & data.map((d) => {
        <AboutFunc 
        data={data} 
        setData={setData}
        id={d.id}
        company={d.company}
        />

      })}
    </div>
  );
}

export default App;
