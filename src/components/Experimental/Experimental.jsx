import React from "react";
import { AiOutlineExperiment } from "react-icons/ai";

import styles from "./Experimental.module.css";

export default function Experimental() {
  return (
    <span className={styles.wrapper}>
      <AiOutlineExperiment title="experimental" />
    </span>
  );
}
