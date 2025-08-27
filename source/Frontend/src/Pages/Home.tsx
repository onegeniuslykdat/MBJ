import { AboutUsSummary } from '../Components/AboutUsSummary'
import { Contact } from '../Components/Contact'
import { ProductList } from '../Components/ProductList'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'

export const Home = () => {
    return <main className='container'>
      <section className='jumbotron'>
        <div className="position-relative">
          <picture className='img-fluid w-100'>
            <source media='(min-width: 720px)' srcSet={logo}/>
            <source media='(min-width: 400px)' srcSet={'https://i.ytimg.com/vi/d1QJPQwDByA/maxresdefault.jpg'}/>
            <img className='img-fluid w-100' src='https://i.ytimg.com/vi/d1QJPQwDByA/maxresdefault.jpg' alt='Banner' />
          </picture>
          <div className='position-absolute top-50 start-50 translate-middle text-center text-white'>
            <h1 className='display-3 fw-bold'>Welcome to Mary's Joint</h1>
            <p className='fw-bold lead'>Discover fresh, high-quality foods prepared just for you.</p>
            <Link to='shop' className='btn btn-info btn-lg'>Order Now</Link>
          </div>
        </div>
      </section>
      <ProductList count={3} />
      <AboutUsSummary />
      <Contact />
  </main>
}
