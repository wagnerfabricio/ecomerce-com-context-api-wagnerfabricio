/* --------------------------- SYSTEM/REACT/REDUX --------------------------- */
// import { useDispatch } from "react-redux";
import { useState } from "react";

/* ----------------------------- PROJECT IMPORTS ---------------------------- */
// import { addToCartThunk, subFromCartThunk } from "../../store/cart/thunks";

/* --------------------------------- STYLES --------------------------------- */
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  Popover,
} from "@mui/material";
import "./styles.css";
import { useCart } from "../../providers/Cart";

const ProductCard = ({ product, isRemovable = false }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = !!anchorEl;

  const id = open ? "simple-popover" : undefined;

  const { title, priceFormated, description, img } = product;
  // const dispatch = useDispatch();

  // const handleAddProduct = () => {
  //   dispatch(addToCartThunk(product));
  // };

  // const haldleSubProduct = () => {
  //   dispatch(subFromCartThunk(product));
  // };

  const { addToCart, removeFromCart } = useCart();

  const handleAddProduct = () => {
    addToCart(product);
  };

  const handleSubProduct = () => {
    removeFromCart(product);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }} elevation={3} style={{ height: "100%" }}>
        <CardActionArea aria-describedby={id} onClick={handleClick}>
          <CardMedia component="img" height="140" image={img} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title.slice()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="h6" color="secondary">
              {priceFormated}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <CardMedia component="img" image={img} alt={title} height="350px" />
      </Popover>

      <Card sx={{ maxWidth: 345 }} className="product-card__button">
        {isRemovable ? (
          <Button
            variant="contained"
            size="medium"
            fullWidth
            onClick={handleSubProduct}
          >
            Remover
          </Button>
        ) : (
          <Button
            variant="contained"
            size="medium"
            fullWidth
            onClick={handleAddProduct}
          >
            Comprar
          </Button>
        )}
      </Card>
    </>
  );
};

export default ProductCard;
