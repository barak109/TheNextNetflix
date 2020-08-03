import React from "react";
import styles from "./Shows.module.scss";
import Show from "./Show";

interface Props {
  shows: any[];
}

export default ({shows}: Props) => {
  return (
    <div className={styles.root}>
      {shows.map(show => {
        if (show.image) return <Show key={show.id} show={show} />;
      })}
    </div>
  );
};
