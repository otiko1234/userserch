import { useEffect, useState } from "react";
import "./App.css";
import Card from "./component/Card";

function App() {
  const [field, setField] = useState("otiko1234");
  const [data, setData] = useState(null);

  async function FetchData() {
    try {
      const response = await fetch(`https://api.github.com/users/${field}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const obj = await response.json();
      setData(obj);
    } catch (error) {
      console.error(error);
      setData(null);
    }
  }

  useEffect(  ()  =>  {

 FetchData()



  }  , []);

  return (
    <>
      <div className="inputDiv">
        <img src="./icon.svg" alt="icon" />
        <input
          onChange={(event) => setField(event.target.value)}
          placeholder="Search Github Username"
          className="inputField"
        />
        <button onClick={FetchData} className="btn">
          Search
        </button>
      </div>

      <Card data={data} />
    </>
  );
}

export default App;
