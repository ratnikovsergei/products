import { Product } from "model";
import React from "react";
import styles from "./Product.module.scss";

interface ProductProps {
  product: Product;
  onDelete: (id: Product["id"]) => void;
  onChangePrice: (id: Product["id"]) => void;
}

export const ProductItem: React.FC<ProductProps> = ({
  product,
  onDelete,
  onChangePrice,
}) => {
  return (
    <div className={styles["product-item"]}>
      <img className={styles.image} src={product.image} alt="iproduct-img" />
      <div>
        <h3 className={styles.title}>{product.title}</h3>
        <p>${product.price}</p>
        <p>{product.company}</p>
        <button
          className={styles["delete-button"]}
          onClick={() => onDelete(product.id)}
        ></button>
        <button
          className={styles["edit-button"]}
          onClick={() => onChangePrice(product.id)}
        ></button>
      </div>
    </div>
  );
};
