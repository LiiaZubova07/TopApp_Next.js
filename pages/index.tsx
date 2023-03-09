import { Button } from "@/components";
import { Htag } from "@/components/Htag/Htag";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost">Кнопка</Button>
    </>
  );
}
