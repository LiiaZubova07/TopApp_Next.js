import { Button, Rating } from "@/components";
import React , { useState } from "react";
import { withLayout } from "@/layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";

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

      <div className="tag tag--size-s">Ghost</div>
      <div className="tag tag--size-m tag--green ">Green</div>
      <div className="tag tag--size-s tag--red">Red</div>
      <div className="tag tag--size-m tag--gray">Gray</div>
      <div className="tag tag--size-s tag--primary ">Primary</div>

      <Rating rating={rating} isEditable setRating={setRating} />

      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",{
      firstCategory
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
