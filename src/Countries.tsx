import styles from './Countries.module.css'
import React, {useEffect, useState} from "react";
import CountryElement from "./CountryElement.tsx";
import {data} from "./types.tsx";

export default function Countries(props: {searchText: string}) {
  const [data, setData] = useState([] as Array<data>);

  useEffect(() => {
    if (props.searchText === "") {
      fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
    } else {
      fetch(`https://restcountries.com/v3.1/name/${props.searchText}`)
        .then(response => response.json())
        .then(data => setData(data))
    }
  }, [props.searchText])

  const countryElementArray = [];
  for (let i = 0; i < data.length; i++) {
    countryElementArray.push(<CountryElement data={data[i]} key={i}/>);
  }

  return(
    <div className={styles.group}>
      {props.searchText !== "" && data[0] !== undefined ? countryElementArray : <></> }
    </div>
  )
}