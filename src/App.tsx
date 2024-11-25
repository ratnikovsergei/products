import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { Product } from "model";
import { getData } from "./mock";
import { SideBar } from "@components/SideBar/SideBar";
import { ProductList } from "./components";

function App() {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    getData().then((data) => setProducts(data as Product[]));
  }, []);

  const filterBtns: string[] = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];

  const handleChangeFilter = (type: string) => {
    setActiveFilter(type);
    setSearch("");
  };

  useEffect(() => {
    setActiveFilter("all");
  }, [search]);

  const filteredProducts = search
    ? products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    : activeFilter === "all"
      ? products
      : products.filter((product) => product.company === activeFilter);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Products Filter</h1>
      <div className={styles.wrapper}>
        <SideBar
          searchChange={setSearch}
          searchValue={search}
          filterBtns={filterBtns}
          onClick={handleChangeFilter}
          activeFilter={activeFilter}
        />
        <main>
          <ProductList list={filteredProducts} />
        </main>
      </div>
    </div>
  );
}

export default App;
