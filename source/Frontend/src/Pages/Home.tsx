import { AboutUsSummary } from '../Components/AboutUsSummary'
import { Contact } from '../Components/Contact'
import { ProductList } from '../Components/ProductList'
import logo from '../Assets/logo.png'

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
            <a href='/shop' className='btn btn-info btn-lg'>Order Now</a>
          </div>
        </div>
      </section>
      {/* <header className='banner'>
        <div className='container'>
            <h1>Welcome to Our Website</h1>
            <p>Your success starts here</p>
            <a href='#learn-more' className='btn btn-primary'>Learn More</a>
        </div>
    </header> */}
      <ProductList count={3} />
      <AboutUsSummary />
      <Contact />
  </main>
}
