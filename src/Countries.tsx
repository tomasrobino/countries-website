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
  return(
    <>
      {props.searchText !== "" && data[0] !== undefined ? <CountryElement data={data[0]}/> : <></> }
    </>
  )
}