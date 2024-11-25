import React from "react";
import { ProductItem } from "./ProductItem";
import { Product } from "model";
import styles from "./Product.module.scss";

interface ProductListProps {
  list: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ list }) => {
  return (
    <div className={styles["product-list"]}>
      {list.length === 0 ? (
        <p>
          <strong>По вашему запросу ничего не найдено</strong>
        </p>
      ) : (
        list.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))
      )}
    </div>
  );
};
