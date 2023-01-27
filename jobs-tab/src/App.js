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
  }, [data]);
  
  async function urlData() {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setData(FETCHED_JSON);
  }
  


  return (
    <div>
      {data & data.filter((d) => {
        <AboutFunc 
        setData={setData} 
        data={data}
        id={d.id} 
        order={d.order} 
        title={d.title} 
        dates={d.dates} 
        duties={d.duties}
        company={d.company}
        />
      })}

      {/* <AboutFunc/> */}
    </div>
  );
}

export default App;
