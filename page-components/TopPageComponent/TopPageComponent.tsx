import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import { Advantages, HhData, Product, Sort } from "@/components";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { SortEnum } from "@/components/Sort/Sort.props";
import { useEffect, useReducer } from "react";
import { sortReducer } from "./sort.reducer";
import { Tag } from "@/components/Tag/Tag";

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

  useEffect(() => {
    dispathSort({ type: "reset", initialState: products });
  }, [products]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1 className="h1">{page?.title}</h1>
        {products && (
          <Tag color="gray" size="m">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>

      <div>
        {sortedProducts?.map((p) => (
          <Product key={p._id} product={p} />
        ))}
      </div>

      <div className={styles.hhTitle}>
        <h2 className="h2">Вакансии - {page?.category}</h2>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
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
        <Tag key={t} color="primary">
          {t}
        </Tag>
      ))}
    </div>
  );
};
