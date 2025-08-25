import { ProductCard } from './ProductCard'
import { ProductServices } from '../Services/ProductServices'

interface ProductListProps {
  count?: number
}

const products = ProductServices.GetProducts();

export const ProductList = (props: ProductListProps) => {  
    return <section className='top-products py-5'>
      <div className='row'>
        {
        products.slice(0, props.count).map((product, index) => (
            <ProductCard key={index} product={product} />
        ))
        }
      </div>
  </section>
}