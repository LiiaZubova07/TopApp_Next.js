import { useForm, Controller } from "react-hook-form";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { IReviewForm } from "./ReviewForm.interface";
import styles from "./ReviewForm.module.css";
import { ReviewFormProps } from "./ReviewForm.props";
import CloseIcon from "./close.svg";
import cn from "classnames";

export const ReviewForm = ({ productId, className }: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)}>
        {/* пропал placeholder в Имя и Заголовок. и, похоже, из-за этого в консоли undefined*/}
        <Input {...register("name")} placeholder="Имя"></Input>
        <Input
          {...register("title")}
          className={styles.title}
          placeholder="Заголовок отзыва"
        ></Input>
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            render={({ field }) => (
              <Rating isEditable rating={field.value} setRating={field.onChange} />
            )}
          />
        </div>
        <textarea
          {...register("description")}
          className={styles.descriptions}
          placeholder="Текст отзыва"
        />
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
    </form>
  );
};
