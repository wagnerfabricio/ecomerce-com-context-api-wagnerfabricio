import { createContext, useContext, useState } from "react";
import { productsDataBase } from "../../services/api";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productsDataBase);
  const [search, setSearch] = useState("")

  const searchProduct = (search) => {
    setSearch(search)
  }

  return (
    <ProductsContext.Provider
      value={{ products, search, searchProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
