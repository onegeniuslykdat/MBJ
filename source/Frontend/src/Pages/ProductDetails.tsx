import { useParams } from "react-router-dom";
import Product from "../Models/Product"
import { ProductServices } from '../Services/ProductServices'
import { CartServices } from "../Services/CartServices";
import Cart from "../Models/Cart";
import CartProduct from "../Models/CartProduct";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

export const ProductDetails = () => {
  let { id } = useParams();
  const cartContext = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const product: Product | undefined = ProductServices.GetProductById(Number.parseInt(id as string))

  if (product === undefined) {
    return <h5 className='text-center'>Product not found</h5>
  }

  const handleAddToCart = () => {
    let cart = cartContext?.cart as Cart;
    console.log('Curr Cart', cart);

    let currProductCount = cart.products?.length !== 0 ? cart.products?.length : 0;
    let cartProduct: CartProduct = {
      id: currProductCount + 1,
      cartId: cartContext?.cart?.id as number,
      quantity,
      product
    };
    let updatedCart = CartServices.AddCartProduct(cart, cartProduct);
    console.log('New Cart', updatedCart);
    
    cartContext?.setCart(updatedCart);
    alert('Added to cart!');
  }

  return (product && <div className='row mt-2'>
    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
      <img src={product.imageUrl} className='img-thumbnail' alt={product.name} />
      <h5 className='text-center mt-2'>{product.name}</h5>
    </div>
    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
      <p className='mt-3'>{product.description}</p>
      <hr />
      <p>Unit Price: ${product.price}</p>
      <hr />
      <div className='d-flex'>
        <div className='p-2'>
          <input className='form-control' min={1} type="number" id="quantity" title='quantity' placeholder="Quantity" value={quantity} onInput={(e) => setQuantity(parseInt(e.currentTarget.value))} />
        </div>
        <div className='p-2 w-75'>
          <button className='btn btn-warning w-100' onClick={() => handleAddToCart()}>Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
  )
}