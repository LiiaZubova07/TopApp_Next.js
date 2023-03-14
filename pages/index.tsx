import { Button,Rating } from "../components";
import React, { useState } from "react";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <div className="h1">Title</div>
      <div className="h2">Title</div>
      <div className="h3">Title</div>

      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>

      <text className="text text--size-s">Small</text>
      <text className="text text--size-m">Average</text>
      <text className="text text--size-l">Big</text>

      <div className="tag tag--size-s">Ghost</div>
      <div className="tag tag--size-m tag--green ">Green</div>
      <div className="tag tag--size-s tag--red">Red</div>
      <div className="tag tag--size-m tag--grey">Grey</div>
      <div className="tag tag--size-s tag--primary ">Primary</div>
      
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
