import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import { Advantages, HhData, Sort } from "@/components";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { SortEnum } from "@/components/Sort/Sort.props";
import { useReducer } from "react";
import { sortReducer } from "./sort.reducer";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, {
    products,
    sort: SortEnum.Rating,
  });

  const setSort = (sort: SortEnum) => {
    dispathSort({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1 className="h1">{page?.title}</h1>
        {products && <div className="tag tag--gray tag--size-m">{products.length}</div>}
        <Sort sort={sort} setSort={setSort} />
      </div>

      <div>
        {sortedProducts?.map((p) => (
          <div key={p._id}>{p.title}</div>
        ))}
      </div>

      <div className={styles.hhTitle}>
        <h2 className="h2">Вакансии - {page?.category}</h2>
        <div className="tag tag--red tag--size-m">hh.ru</div>
      </div>
      {firstCategory === TopLevelCategory.Courses && page?.hh && <HhData {...page.hh} />}

      {page?.advantages && page?.advantages.length > 0 && (
        <>
          <h2 className="h2">Преимущества</h2>
          <Advantages advantages={page?.advantages} />
        </>
      )}
      {page?.seoText && (
        <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page?.seoText }} />
      )}

      <h2 className="h2">Получаемые навыки</h2>
      {page?.tags.map((t) => (
        <div key={t} className="tag tag--primary">
          {t}
        </div>
      ))}
    </div>
  );
};
