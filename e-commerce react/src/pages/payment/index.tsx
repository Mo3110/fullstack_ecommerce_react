import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useGlobalStore from "../../store";
import CheckoutForm from "../../components/checkout-form";
import Text from "../../components/text";
import { getCartTotal } from "../../helpers";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Payment = () => {
  const { clientSecret, cart } = useGlobalStore();

  const options = {
    clientSecret,
  };

  const cartTotal = getCartTotal(cart);

  return (
    <div className="mx-50 my-82">
      <div className="grid grid-cols-2 gap-40">
        <div className="max-w-2xl ml-10">
        {clientSecret && (
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements>
        )}
        </div>
        <div className="mr-10 mt-2 mb-10">
          <div className="space-y-7">
            {cart.map((cartItem) => {
              return (
                <div
                  className="flex items-center justify-between"
                  key={cartItem.id}
                >
                  <img
                    src={cartItem.image}
                    width={170}
                    height={170}
                    className="w-170 h-170 rounded-18 mr-46"
                    alt=""
                  />
                  <div className="flex flex-col w-full justify-between">
                    <div className="flex justify-between ml-4">
                      <Text variant="subheading-three">{cartItem.name}</Text>
                      <Text variant="subheading-three" className="mr-4">
                        $ {cartItem.price} x {cartItem.quantity}
                      </Text>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 flex justify-between">
            <Text variant="body-three">Subtotal</Text>
            <Text variant="subheading-three">$ {cartTotal}</Text>
          </div>
          <div className="mt-10 flex justify-between">
            <Text variant="body-three">Shipping</Text>
            <Text variant="subheading-three">Free</Text>
          </div>
          <div className="mt-35 mb-10 h-1 bg-black"></div>
          <div className="mt-10 flex justify-between">
            <Text variant="body-three">Total</Text>
            <Text variant="subheading-three">$ {cartTotal}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
