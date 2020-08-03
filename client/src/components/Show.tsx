import React, {useState} from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import styles from "./Show.module.scss";
import {Show} from "../types/show";

interface Props {
  show: Show;
}

export default ({show}: Props) => {
  const [isLiked, setIsLiked] = useState(() => sessionStorage.getItem(show.id));

  const handleClick = () => {
    if (isLiked) {
      setIsLiked(null);
      sessionStorage.removeItem(show.id);
    } else {
      setIsLiked("true");
      sessionStorage.setItem(show.id, "true");
    }
  };

  return (
    <div onClick={handleClick} className={styles.show}>
      {isLiked && (
        <FavoriteIcon className={styles.heartIcon} htmlColor="red" fontSize="large" />
      )}
      <img src={show.image}></img>
      <p className={styles.showName}>{show.name}</p>
    </div>
  );
};
