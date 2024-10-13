import { CheckoutSuccess } from "../components/templates";
import { Helmet } from "react-helmet";

function CheckOut() {
    return (
      <div>
        <Helmet>
            <title>Checkout Successful</title>
            <meta name="description" content="Your checkout was successful. Thank you for your purchase!" />
        </Helmet>
        <main>
            <CheckoutSuccess />
        </main>
      </div>
    );
  }
  
  export default CheckOut;
  