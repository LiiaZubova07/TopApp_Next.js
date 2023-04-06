import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import cn from "classnames";

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
  // без ...props не отображается placeholder из index.tsx
  return <input className={cn(className, styles.input)}{...props} />;
};