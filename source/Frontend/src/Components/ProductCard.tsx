import Product from "../Models/Product"

interface ProductCardProps {
  product: Product
}

export const ProductCard = (props: ProductCardProps) => {
    return <div className='col-xl-4 col-lg-4'>
      <div className='card h-100'>
        <img src={props.product.imageUrl} className='card-img-top w-100' alt={props.product.name} />
        <div className='card-body'>
          <h5 className='card-title'>{props.product.name}</h5>
          <p className='card-text'>{props.product.description}</p>
          <div className='d-flex justify-content-between'>
            <a href={`shop/products/${props.product.id}`} className='btn btn-info'>View Details</a>
            <button className='btn btn-warning' onClick={() => alert('Added to cart')}>Add to Cart</button>
          </div> 
        </div>
      </div>
    </div>
}