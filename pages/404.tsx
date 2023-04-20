import { withLayout } from "@/layout/Layout";

export function Error404(): JSX.Element {
  return (
    <>
      <h1>Ошибка 404</h1>
    </>
  );
}

export default withLayout(Error404);
