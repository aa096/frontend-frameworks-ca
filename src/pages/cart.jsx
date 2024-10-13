import { CartPage } from "../components/templates";
import { Helmet } from "react-helmet";

function Cart() {
  return (
    <div>
      <Helmet>
        <title>Your Cart | AnyCart </title>
        <meta
          name="description"
          content="Review items in your shopping cart."
        />
      </Helmet>
      <main>
        <CartPage />
      </main>
    </div>
  );
}

export default Cart;
