import styles from './Countries.module.css'
import {useEffect, useState} from "react";

export default function Countries(props: {searchText: string}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.searchText === "") {
      fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => console.log(data));
    } else {
      fetch(`https://restcountries.com/v3.1/name/${props.searchText}`)
       .then(response => response.json())
       .then(data => setData(data));
    }
  }, [props.searchText])
  return(
    <></>
  )
}