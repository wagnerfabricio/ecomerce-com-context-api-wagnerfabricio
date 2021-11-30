import { searchProduct, showAllProducts } from "./actions";

export const searchProductThunk = (searchValue) => (dispatch) => {
  if (!!searchValue) {
      return (
          dispatch(showAllProducts("")),
          dispatch(searchProduct(searchValue))
      )
  }
    dispatch(showAllProducts(""));
};
