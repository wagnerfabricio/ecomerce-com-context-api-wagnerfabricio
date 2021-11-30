import { Button, Container, Grid } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../providers/Products";
// import { searchProductThunk } from "../../store/products/thunks";
import formatValue from "../../utils/formatValue";

const Shop = () => {
  // const productsDatabase = useSelector((store) => store.products);
  // const dispatch = useDispatch();

  const { products: productsDatabase, search, searchProduct } = useProducts();

  const filteredProducts = productsDatabase.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const products = filteredProducts.map((product) => ({
    ...product,
    priceFormated: formatValue(product.price),
  }));

  const showProducts = products.map((product) => (
    <Grid item xs={12} sm={4} md={3} key={product.id}>
      <ProductCard product={product} />
    </Grid>
  ));

  // const handleButton = () => {
  //   dispatch(searchProductThunk(""));
  // };
  const handleButton = () => {
    searchProduct("");
  };

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 4, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        p={2}
      >
        {showProducts}
      </Grid>
      <Button color="primary" onClick={handleButton}>
        Voltar
      </Button>
    </Container>
  );
};

export default Shop;
