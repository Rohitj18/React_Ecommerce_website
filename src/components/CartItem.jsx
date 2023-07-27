
import { FcDeleteDatabase, MdDelete } from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  const description = item.description.length > 80 ? `${item.description.substr(0, 80)}...` : item.description;

  return (
    <div className="border-b-2 border-black max-w-12xl">

      <div className="flex h-[230px] items-center">

        <div className="">
          <img src={item.image} alt="" className="h-[180px] w-[140px]"/>
        </div>

        <div className="w-[350px] mx-10">
          <h1 className="text-lg font-bold ">{item.title}</h1>
          <h1 className="text-md my-5">{description}</h1>
          <div className="flex justify-between items-center align-baseline">
            <p className="font-bold text-green-600 ">{`$ ${item.price}`}</p>
            <div
              onClick={removeFromCart}>
              <MdDelete size={25} />
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
