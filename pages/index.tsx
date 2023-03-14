import { Button, Htag, P, Tag, Rating } from "../components";
import React, { useState } from "react";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Title</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>

      <P size="s">Small</P>
      <P>Average</P>
      <P size="l">Big</P>

      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="green">
        Green
      </Tag>
      <Tag size="s" color="red">
        Red
      </Tag>
      <Tag size="m" color="grey">
        Grey
      </Tag>
      <Tag color="primary">Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
