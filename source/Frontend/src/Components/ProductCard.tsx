import { Link } from 'react-router-dom';
import Product from "../Models/Product";
import { CartServices } from '../Services/CartServices';
import Cart from '../Models/Cart';
import CartProduct from '../Models/CartProduct';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

interface ProductCardProps {
  product: Product
}

export const ProductCard = (props: ProductCardProps) => {
  const cartContext = useContext(CartContext);
  
  const handleAddToCart = () => {
    let cart = cartContext?.cart as Cart;

    let currProductCount = cart.products?.length !== 0 ? cart.products?.length : 0;
    let cartProduct: CartProduct = {
      id: currProductCount + 1,
      cartId: cartContext?.cart?.id as number,
      quantity: 1,
      product: props.product
    };
    let updatedCart = CartServices.AddCartProduct(cart, cartProduct);

    cartContext?.setCart(updatedCart);
    alert('Added to cart!');
  }

  return <div className='col-xl-4 col-lg-4'>
    <div className='card h-100'>
      <img src={props.product.imageUrl} className='card-img-top w-100' alt={props.product.name} />
      <div className='card-body'>
        <h5 className='card-title'>{props.product.name}</h5>
        <p className='card-text'>{props.product.description}</p>
        <div className='d-flex justify-content-between'>
          <Link to={`/MBJ/shop/products/${props.product.id}`} className='btn btn-info'>View Details</Link>
          <button className='btn btn-warning' onClick={() => handleAddToCart()}>Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
}