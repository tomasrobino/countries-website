import styles from './CountryElement.module.css'
import {data} from "./types.tsx";

export default function CountryElement(props: { data: data }) {
  return(
    <div>
      <p>{Object.values(props.data.name)[0]}</p>
      <p>{props.data.capital? props.data.capital : ""}</p>
      <img className={styles.flag} src={props.data.flag} alt={props.data.flags.alt} />
      <p>{props.data.population}</p>
      <p>{props.data.region}</p>
      <p>{props.data.area}</p>
    </div>
  )
}