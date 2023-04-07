import React, { useState } from "react";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { Button, Input, Rating } from "@/components";
import { Tag } from "@/components/Tag/Tag";

function Home({ menu }: HomeProps): JSX.Element {
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

      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="green">
        Green
      </Tag>
      <Tag size="s" color="red">
        Red
      </Tag>
      <Tag size="m" color="gray">
        Gray
      </Tag>
      <Tag size="s" color="primary">
        Primary
      </Tag>

      <Rating rating={rating} isEditable setRating={setRating} />

      <Input placeholder="Test" />

      <textarea placeholder="Test Textarea" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
