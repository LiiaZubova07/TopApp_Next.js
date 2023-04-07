import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import styles from "./ReviewForm.module.css";
import { ReviewFormProps } from "./ReviewForm.props";
import CloseIcon from "./close.svg";
import cn from "classnames";

export const ReviewForm = ({ productId, className}: ReviewFormProps): JSX.Element => {
  return (
    <>
      <div className={cn(styles.reviewForm, className)}>
        <Input placeholder="Имя"></Input>
        <Input className={styles.title} placeholder="Заголовок отзыва"></Input>
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Rating rating={0} />
        </div>
        <textarea className={styles.descriptions} placeholder="Текст отзыва"></textarea>
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и проверку
          </span>
        </div>
      </div>

      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен.</div>
        <div>Спасибо, Ваш отзыв будет опубликован после проверки.</div>
        <CloseIcon className={styles.close} />
      </div>
    </>
  );
};
