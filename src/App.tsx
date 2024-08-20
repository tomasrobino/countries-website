import styles from './App.module.css'
import SearchBar from "./SearchBar.tsx";
import Countries from "./Countries.tsx";
import {useState} from "react";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <h1>Countries Website</h1>
      <SearchBar searchText={searchText} setSearchText={setSearchText}/>
      <Countries searchText={searchText}/>
    </>
  )
}

export default App
