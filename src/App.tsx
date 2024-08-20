import styles from './App.module.css'
import SearchBar from "./SearchBar.tsx";
import Countries from "./Countries.tsx";

function App() {
  return (
    <>
      <h1>Countries Website</h1>
      <SearchBar/>
      <Countries/>
    </>
  )
}

export default App
