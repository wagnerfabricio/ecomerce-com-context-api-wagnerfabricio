// import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { Content, EmptyCart } from "./styles";

import { Button, Container, Grid, Typography } from "@mui/material";
import formatValue from "../../utils/formatValue";
import { useHistory } from "react-router";
import { useCart } from "../../providers/Cart";

const Cart = () => {
  // const cartDatabase = useSelector((store) => store.cart);

  const history = useHistory();

  const { cart: cartDatabase } = useCart();

  const products = cartDatabase.map((product) => ({
    ...product,
    priceFormated: formatValue(product.price),
  }));

  const showCart = products.map((product) => (
    <Grid item xs={12} sm={4} md={3} key={product.id}>
      <ProductCard product={product} isRemovable />
    </Grid>
  ));

  const total = products.reduce((acc, product) => acc + product.price, 0);
  const totalFormated = formatValue(total);

  return products.length > 0 ? (
    <Container>
      <Content>
        <Typography variant="h5">Total da compra: {totalFormated}</Typography>
        <Button
          variant="contained"
          size="medium"
          onClick={() => {
            history.push("/checkout");
          }}
        >
          Finalizar compra
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          onClick={() => history.push("/")}
        >
          Comprar mais
        </Button>
      </Content>
      <Grid
        container
        spacing={{ xs: 4, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        p={2}
      >
        {showCart}
      </Grid>
    </Container>
  ) : (
    <EmptyCart>
      <h1>Seu carrinho está vazio... :(</h1>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        onClick={() => history.push("/")}
      >
        Ir as compras!
      </Button>
    </EmptyCart>
  );
};

export default Cart;
