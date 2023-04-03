import { TextareaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";
import cn from "classnames";

export const Textarea = ({ className, ...props }: TextareaProps): JSX.Element => {
  // без ...props не отображается placeholder из index.tsx
  return <textarea className={cn(className, styles.input)} {...props} />;
};
