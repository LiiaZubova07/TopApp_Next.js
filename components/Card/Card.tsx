/* eslint-disable react/display-name */
import { ForwardedRef, forwardRef } from "react";
import styles from "./Card.module.css";
import { CardProps } from "./Card.props";
import cn from "classnames";

//без этого весь код в красном
export const Card = forwardRef(
  (
    { color = "white", children, className }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        className={cn(styles.card, className, {
          [styles.blue]: color == "blue",
        })}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
