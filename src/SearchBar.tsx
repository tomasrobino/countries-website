import styles from './SearchBar.module.css'
import React from "react";

export default function SearchBar(props: {searchText: string, setSearchText: React.Dispatch<React.SetStateAction<string>>}) {
  function handleInput(event: React.FormEvent<HTMLInputElement>) {
    props.setSearchText(event.currentTarget.value);
  }

  return (
    <input value={props.searchText} type="search" autoComplete="off" placeholder="Search" onInput={handleInput}/>
  )
}