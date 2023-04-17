import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";
import { useEffect, useState, KeyboardEvent, useRef } from "react";

export const Rating = ({
  isEditable = false,
  rating,
  error,
  setRating,
  tabIndex,
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    constructRating(rating);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ rating, tabIndex]);

  const computeFocus = (r: number, i: number): number => {
    if (!isEditable) {
      return -1;
    }
    if (!rating && i === 0) {
      return tabIndex ?? 0;
    }
    if (r && i + 1) {
      return tabIndex ?? 0;
    }
    return -1;
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
          tabIndex={computeFocus(rating, i)}
          onKeyDown={handleKey}
          ref={(r) => ratingArrayRef.current?.push(r)}
        >
          <StarIcon />
        </span>
      );
    });

    setRatingArray(updatedArray);
  };

  const changeDisplay = (index: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(index);
  };
  const onClick = (index: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(index);
  };

  const handleKey = (event: KeyboardEvent) => {
    if (!isEditable || !setRating) {
      return;
    }
    if (event.code == "ArrowRight" || event.code == "ArrowUp") {
      if (!rating) {
        setRating(1);
      } else {
        event.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }
      ratingArrayRef.current?.[rating]?.focus();
    }
    if (event.code == "ArrowLeft" || event.code == "ArrowDown") {
      event.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
      ratingArrayRef.current?.[rating - 2]?.focus();
    }
  };

  return (
    <div
      className={cn(styles.ratingWrapper, {
        [styles.error]: error,
      })}
    >
      {ratingArray.map((rating, index) => (
        <span key={index}>{rating}</span>
      ))}
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};
