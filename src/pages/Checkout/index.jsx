import { Container, Content } from "./styles";
import { Button } from "@mui/material";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
// import { clearCartThunk } from "../../store/cart/thunks";
// import { useDispatch } from "react-redux";
// import { searchProductThunk } from "../../store/products/thunks";
import formatValue from "../../utils/formatValue";
import { useCart } from "../../providers/Cart";
import { useProducts } from "../../providers/Products";

const Checkout = () => {
  const history = useHistory();
  // const dispatch = useDispatch();

  const { cleanCart } = useCart();
  const { searchProduct } = useProducts();

  const cartDatabase = JSON.parse(localStorage.getItem("@kenzieshop:cart"));
  const total = cartDatabase.reduce((acc, product) => acc + product.price, 0);
  const totalFormated = formatValue(total);

  const { username, email } = JSON.parse(
    localStorage.getItem("@kenzieshop:user")
  );

  const handleCheckout = () => {
    toast.success("Pedido realizado com sucesso!");
    setTimeout(() => {
      cleanCart();
      searchProduct("");
      // dispatch(clearCartThunk());
      // dispatch(searchProductThunk(""));
      history.push("/");
    }, 3000);
  };

  return (
    <Container>
      <Content>
        <h1>Checkout</h1>
        <h4>Verifique os seus dados</h4>
        <p>
          Nome de usuário: <span>{username}</span>
        </p>
        <p>
          Email: <span>{email}</span>{" "}
        </p>
        <p>
          Valor total: <span>{totalFormated}</span>
        </p>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={handleCheckout}
        >
          Confirmar
        </Button>
      </Content>
    </Container>
  );
};

export default Checkout;
