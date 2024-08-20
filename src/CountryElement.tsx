import styles from './CountryElement.module.css'

export default function CountryElement(props: { data: any }) {
  //props.data is json

  return(
    <div>
      <h2>{props.data.name}</h2>
      <p>{...props.data.capital}</p>
      <img className={styles.flag} src={props.data.flag} alt={props.data.name} />
      <p>{props.data.population}</p>
      <p>{props.data.region}</p>
      <p>{props.data.subregion}</p>
      <p>{props.data.area}</p>
      <p>{props.data.gini}</p>
      <p>{props.data.borders.join(', ')}</p>
    </div>
  )
}