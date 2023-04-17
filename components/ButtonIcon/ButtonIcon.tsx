import styles from "./ButtonIcon.module.css";
import { ButtonIconProps, icons } from "./ButtonIcon.props";
import cn from "classnames";

export const ButtonIcon = ({
  appearance,
  icon,
  className,
  onClick,
}: ButtonIconProps): JSX.Element => {
  const IconComponent = icons[icon];

  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == "primary",
        [styles.white]: appearance == "white",
      })}
      onClick={onClick}
    >
      <IconComponent />
    </button>
  );
};
