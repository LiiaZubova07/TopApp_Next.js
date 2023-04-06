import styles from "./Divider.module.css";
import { DividerProps } from "./Divider.props";
import cn from "classnames";

export const Divider = ({ className }: DividerProps): JSX.Element => {
  return <hr className={cn(className, styles.hr)} />;
};
