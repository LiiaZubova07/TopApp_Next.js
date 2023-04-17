import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";
import { motion, useMotionValue } from "framer-motion";

export const Button = ({
  appearance,
  arrow = "none",
  children,
  ...props
}: ButtonProps): JSX.Element => {
  const scale = useMotionValue(1);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={cn(styles.button, {
        [styles.primary]: appearance == "primary",
        [styles.ghost]: appearance == "ghost",
      })}
      style={{ scale }}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow == "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </motion.button>
  );
};
