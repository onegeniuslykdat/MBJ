import { ProductList } from '../Components/ProductList';
import logo from '../Assets/minibanner.png';
import { MiniHeaderBanner } from '../Components/MiniHeaderBanner';

export const Shop = () => {
  return <main className="container">
    <MiniHeaderBanner source={logo} />
    <div className='row'>
      <h1 className='text-center'>Order from our menu</h1>
    </div>
    <div className='row'>
      <ProductList />
    </div>
  </main>
}