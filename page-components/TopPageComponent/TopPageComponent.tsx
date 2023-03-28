import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import { Card, HhData } from "@/components";
import { TopLevelCategory } from "@/interfaces/page.interface";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1 className="h1">{page.title}</h1>
        {products && <div className="tag tag--gray tag--size-m">{products.length}</div>}
        <span>Сортировка</span>
      </div>

      <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>

      <div className={styles.hhTitle}>
        <h1 className="h2">Вакансии - {page.category}</h1>
        <div className="tag tag--red tag--size-m">hh.ru</div>
      </div>
      {firstCategory == TopLevelCategory.Courses && <HhData {...page.hh} />}
    </div>
  );
};
