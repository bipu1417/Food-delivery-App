import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="text-center font-bold m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12">
                <button className="shadow-lg rounded-lg p-2 m-2 bg-white text-black" 
                onClick={handleClearCart}>Clear cart</button>
                {cartItems.length === 0 && <h1>Cart is Empty. Add items to Cart.</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;