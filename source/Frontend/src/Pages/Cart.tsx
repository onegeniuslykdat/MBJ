import { Link } from 'react-router-dom';
import './cart.css'
import logo from '../Assets/minibanner.png'
import { MiniHeaderBanner } from '../Components/MiniHeaderBanner'
import { TrashFill } from 'react-bootstrap-icons'
import { useContext } from 'react';
import { CartContext } from "../Context/CartContext";
import CartProduct from '../Models/CartProduct';

export const Cart = () => {
  const cartContext = useContext(CartContext);
  const cartItems =  cartContext?.cart?.products as CartProduct[];

  const handleRemoveFromCart = () => {
      // let cart = cartContext?.cart as Cart;
      // let currProductCount = cart.products?.length !== 0 ? cart.products?.length : 0;
      // let cartProduct: CartProduct = {
      //   id: currProductCount + 1,
      //   cartId: cartContext?.cart?.id as number,
      //   quantity,
      //   product
      // };
      // let updatedCart = CartServices.AddCartProduct(cart, cartProduct);
      // cartContext?.setCart(updatedCart);
      alert('Removed from cart!');
    }

  return <main className='container'>
    <MiniHeaderBanner source={logo} />
    <div className='row'>
      <h1 className='text-center'>Your Cart</h1>
    </div>
    {cartItems.length === 0 && <div className='row'>
      <h5 className='text-center'>No items pending in your cart...</h5>
    </div>}
    {cartItems.length > 0 && <div className='row'>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>
              <a href={`shop/products/${item.product.id}`}>
                <img src={item.product.imageUrl} className='img-thumbnail' width={100} alt={item.product.name} />
              </a>
            </td>
            <td>{item.quantity}</td>
            <td>${item.product.price}</td>
            <td>${item.quantity * item.product.price}</td>
            <td>
              <button className='btn btn-danger delete' title='delete' onClick={() => handleRemoveFromCart()}>
                <TrashFill className='text-danger' />
              </button>
            </td>
          </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total: ${cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0)}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>}
    <div className='row'>
      <Link to='/checkout' className='btn btn-success w-100'>Proceed to Checkout</Link>
    </div>
  </main>
}