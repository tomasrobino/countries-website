import styles from './CountryElement.module.css'
import {data} from "./types.tsx";

export default function CountryElement(props: { data: data }) {
  //props.data is json

  return(
    <div>
      <h2>{props.data.name.nativeName.eng.official}</h2>
      <p>{props.data.capital? props.data.capital[0] + " " + props.data.capital[1] : ""}</p>
      <img className={styles.flag} src={props.data.flag} alt={props.data.flags.alt} />
      <p>{props.data.population}</p>
      <p>{props.data.region}</p>
      <p>{props.data.area}</p>
    </div>
  )
}