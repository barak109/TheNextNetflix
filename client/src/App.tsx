import React, {useState, useRef} from "react";
import AutoComplete from "./components/AutoComplete";
import styles from "./App.module.scss";
import {getShowes, getTopShowesName} from "./api/apiGateway";
import {debounce} from "./api/helpFuncs";
import {isEmptyOrSpaces} from "./utils/conversions";
import Shows from "./components/Shows";

function App() {
  const [names, setNames] = useState([]);
  const [text, setText] = useState("");
  const [shows, setShows] = useState([]);

  const onValueChange = (value: string, method: string) => {
    if (!isEmptyOrSpaces(value)) {
      if (method !== "click" && method !== "enter")
        // @ts-ignore
        handleDebounce.current(value);
      setText(value);
    } else setNames([]);
  };

  const getShowesNames = (value: string) => {
    getTopShowesName(value).then(names => setNames(names));
  };
  const handleDebounce = useRef(debounce(getShowesNames, 1000));

  const handleOnClick = (value: string) => {
    getShowes(value).then(data => {
      setShows(data);
    });
    setNames([]);
  };

  return (
    <div className={styles.root}>
      <h1>Search</h1>
      <div className={styles.autocompleteArea}>
        <AutoComplete
          data={names}
          onValueChange={onValueChange}
          onSelected={handleOnClick}
          placeholder="Type show name"
        />
        <button onClick={() => handleOnClick(text)} className={styles.search}>
          Search
        </button>
      </div>
      <Shows shows={shows} />
    </div>
  );
}

export default App;
