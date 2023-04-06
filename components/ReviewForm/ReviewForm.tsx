import { Input } from "../Input/input";
import { Rating } from "../Rating/Rating";
import styles from "./ReviewForm.module.css";
import { ReviewFormProps } from "./ReviewForm.props";
import cn from "classnames";

export const ReviewForm = ({ productId, className,...props }: ReviewFormProps): JSX.Element => {
  return (
    <div className={cn(styles.reviewForm, className)}{...props}>
<Input placeholder="Имя"></Input>
<Input placeholder="Заголовок отзыва"></Input>
<div>
  <span>Оценка:</span>
  <Rating rating={0}/>
</div>
    </div>
  );
};
