import styles from "./Advantages.module.css";
import cn from "classnames";
import CheckIcon from "./check.svg";
import React from "react";
import { AdvantagesProps } from "./Advantages.props";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <div>
            <hr className={styles.vline} />
          </div>
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
};
