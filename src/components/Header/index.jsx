import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { VscSearch } from "react-icons/vsc";
import { Toaster } from "react-hot-toast";

import { FiLogIn } from "react-icons/fi";

import logo from "../../assets/images/logo.png";
import { CartIcon, Container, Logo } from "./styles";
import { Avatar, Badge, Button, IconButton } from "@mui/material";
import { useHistory, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// import { searchProductThunk } from "../../store/products/thunks";
import { useCart } from "../../providers/Cart";
import { useProducts } from "../../providers/Products";
import { useUser } from "../../providers/User";

const Header = () => {
  const [search, setSearch] = useState("");
  // const { username } = useSelector((state) => state.userData.user);

  const { data } = useUser();
  const username = data.user?.username;

  const userFirsLetter = !!username ? (
    username.slice(0, 1).toUpperCase()
  ) : (
    <FiLogIn />
  );

  // const dispatch = useDispatch();

  const history = useHistory();

  // const cartProducts = useSelector((store) => store.cart);

  const { cart: cartProducts } = useCart();
  const { searchProduct } = useProducts();

  const qttProducts = cartProducts.length;

  // const handleSearch = () => {
  //   dispatch(searchProductThunk(search));
  //   setSearch("");
  // };

  const handleSearch = () => {
    searchProduct(search);
  };

  return (
    <>
      <Toaster />
      <Container>
        <Link to="/">
          <Logo>
            <ShoppingCartCheckoutIcon
              sx={{ fontSize: "80px" }}
              color={"primary"}
            />
            <div>
              <img src={logo} alt="Kenzie Shop" />
              <span>Shop</span>
            </div>
          </Logo>
        </Link>
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            placeholder="Pesquisar produto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="contained" size="medium" onClick={handleSearch}>
            <span>Pesquisar</span>
            <VscSearch />
          </Button>
        </form>
        <CartIcon>
          <IconButton
            size="large"
            aria-label={`show ${qttProducts} new notifications`}
            color="inherit"
            onClick={() => history.push("/cart")}
          >
            <Badge badgeContent={qttProducts} color="error">
              <ShoppingCartCheckoutIcon fontSize={"large"} />
            </Badge>
          </IconButton>
          <Link to={!!username ? "/useraccount" : "/login"}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56, bgcolor: "black" }}
            >
              {userFirsLetter}
            </Avatar>
          </Link>
        </CartIcon>
      </Container>
    </>
  );
};

export default Header;
