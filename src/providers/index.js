import { CartProvider } from "./Cart";
import { ProductsProvider } from "./Products";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
};

export default Providers;
