import styles from './CountryElement.module.css'
import {data} from "./types.tsx";
import {useState} from "react";

export default function CountryElement(props: { data: data }) {
  const [hover, setHover] = useState(false);

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  return(
    <div className={`${styles.card} ${hover ? styles.cardHover : null}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {hover ?
        <div className={styles.titleDiv}>
          <p>{Object.values(props.data.name)[0]}</p>
          <p>{props.data.capital ? props.data.capital : ""}</p>
        </div> : null}
      <img className={styles.flag} src={props.data.flags.svg} alt={props.data.flags.alt} />
      {hover ?
        <div className={styles.dataDiv}>
          <p>{props.data.population}</p>
          <p>{props.data.region}</p>
          <p>{props.data.area}</p>
        </div> : null}
    </div>
  )
}