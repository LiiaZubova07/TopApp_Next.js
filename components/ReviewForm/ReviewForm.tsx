import { useForm, Controller } from "react-hook-form";
import { Button } from "../Button/Button";
import { Rating } from "../Rating/Rating";
import { IReviewForm } from "./ReviewForm.interface";
import styles from "./ReviewForm.module.css";
import { ReviewFormProps } from "./ReviewForm.props";
import CloseIcon from "./close.svg";
import cn from "classnames";
import { Input } from "../Input/Input";

export const ReviewForm = ({ productId, className }: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)}>
        <Input
          {...register("name", { required: { value: true, message: "Заполните имя" } })}
          placeholder="Имя"
          error={errors.name}
        ></Input>

        <Input
          {...register("title", { required: { value: true, message: "Заполните заголовок" } })}
          placeholder="Заголовок отзыва"
          className={styles.title}
          error={errors.title}
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
