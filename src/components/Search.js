import React, { useEffect, useState } from "react";

import "../styles/Search.css";
import { ToggleColumns } from "./ToggleColumns";
import { ProductList } from "./ProductList";
import { FilterForm } from "./FilterForm";
import allProducts from "../assets/products.json";

export const Search = (props) => {
  const [products, setProducts] = useState({ list: [] });

  const [price, setPrice] = useState({ priceFrom: "", priceTo: "" });

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceInputChange = (name, value) => {
    setPrice({
      ...price,
      [name]: value,
    });
  };

  useEffect(() => {
    setProducts({
      list: filterProducts(),
    });
  }, [price, columns]);

  const onCheckboxClick = (name, checked) => {
    setColumns({
      ...columns,
      [name]: checked,
    });
  };

  const filterProducts = () => {
    switch (true) {
      case price.priceFrom === 0 && price.priceTo === 0: //Both equals 0
      case price.priceFrom < 0 || price.priceTo < 0: // Either one is negative
        return [];

      case price.priceFrom === "" && price.priceTo !== "":
        return allProducts.filter((prod) => {
          debugger;
          if (prod.price > 0 && prod.price < price.priceTo) return prod;
        });

      case price.priceTo === "" && price.priceFrom !== "":
        return allProducts.filter((prod) => {
          if (prod.price > price.priceFrom) return prod;
        });

      case price.priceFrom !== "" && price.priceTo !== "":
        return allProducts.filter((prod) => {
          if (prod.price > price.priceFrom && prod.price < price.priceTo)
            return prod;
        });

      default:
        return allProducts;
    }
  };

  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange}
      />

      <ToggleColumns onCheckboxClick={onCheckboxClick} columns={columns} />

      <ProductList products={products.list} columns={columns} />
    </div>
  );
};

export default Search;
