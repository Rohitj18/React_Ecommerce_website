import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div className="mt-5 w-[900px] mx-auto">
      {
        cart.length > 0 ?
          (<div className="flex flex-row justify-center h-full gap-8">


            <div className="flex flex-col gap-3 max-w-8xl h-[400px]">
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>

            <div className="flex flex-col justify-between w-[300px] h-[640px]">

              <div className="mt-[60px]">
                <div className="uppercase text-green-700 text-md font-bold">Your Cart</div>
                <div className="uppercase text-4xl font-bold text-green-700 mb-4">Summary</div>
                <p>
                  <span className="font-bold">Total Items: {cart.length}</span>
                </p>
              </div>

              <div>
                <p>Total Amount: <span className="font-bold">{`$ ${totalAmount}`}</span></p>
                <button className="mx-auto w-full bg-green-700 text-white rounded-md h-[45px] my-4">
                  CheckOut Now
                </button>
              </div>

            </div>


          </div>) :
          (<div>
            <h1>Cart Empty</h1>
            <Link to={"/"}>
              <button>
                Shop Now
              </button>
            </Link>
          </div>)
      }
    </div>
  );
};

export default Cart;
