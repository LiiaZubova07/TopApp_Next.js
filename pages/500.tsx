import { withLayout } from "@/layout/Layout";
import React from "react";

export function Error500(): JSX.Element {
  return (
    <>
      <h1>Ошибка 500</h1>
    </>
  );
}

export default withLayout(Error500);
