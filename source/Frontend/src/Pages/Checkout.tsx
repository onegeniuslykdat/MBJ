import './cart.css'
import logo from '../Assets/minibanner.png'
import { MiniHeaderBanner } from '../Components/MiniHeaderBanner'

let cartItems = [1];

export const Checkout = () => {
  return <main className='container'>
    <MiniHeaderBanner source={logo} />
    <div className='row'>
      <h1 className='text-center'>Your Order</h1>
      <h5 className='text-center'>#{`${500111}`}</h5>
    </div>
    {cartItems.length < 1 && <div className='row'>
      <h5 className='text-center'>No items ordered</h5>
    </div>}
    {cartItems.length >= 1 && <div className='row'>
      <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Product</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <a href='shop/products/1'>
                  <img src='https://i.ytimg.com/vi/d1QJPQwDByA/maxresdefault.jpg' className='img-thumbnail' width={80} alt='Product 1' />
                </a>
              </td>
              <td>${50.00}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>Total: ${50.00}</td>
            </tr>
          </tfoot>
        </table>
        <div className='panel'>
          <h5>Account details</h5>
          <ul>
            <li>Account Name: ***</li>
            <li>Account Number: ***</li>
            <li>Bank: ***</li>
            <li>BSB: ***</li>
          </ul>
          <h5>Order Total: ${70.00}</h5>
          <ul>
            <li>Items: ${50.00}</li>
            <li>Delivery: ${20.00}</li>
          </ul>
        </div>
      </div>
      <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12'>
        <form>
          <div className='row mb-2'>
            <div className='form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <label htmlFor='fname'>First Name</label>
              <input type='text' className='form-control' name='fname' id='fname' placeholder='First name' required />
            </div>
            <div className='form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <label htmlFor='lname'>Last name</label>
              <input type='text' className='form-control' name='lname' id='lname' placeholder='Last name' required />
            </div>
            <div className='form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <label htmlFor='email'>Email <em>(You will receive an email with your invoice)</em></label>
              <input type='email' className='form-control' name='email' id='email' placeholder='Email' required />
            </div>
            <div className='form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <label htmlFor='phone'>Phone number</label>
              <input type='tel' className='form-control' name='phone' id='phone' placeholder='Phone number' required />
            </div>
          </div>
          <div className='row mb-2'>
            <div className='form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <label htmlFor='address'>Address (House no, Street, Suburb)</label>
              <input type='text' className='form-control' id='address' placeholder='14, Queens street, Brisbane' required />
            </div>
            <div className='form-group col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
              <label htmlFor='suburb'>Suburb</label>
              <input type='text' className='form-control' name='suburb' id='suburb' placeholder='Brisbane' required />
            </div>
            <div className='form-group col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
              <label htmlFor='postcode'>Postcode</label>
              <input type='text' className='form-control' name='postcode' id='postcode' placeholder='4000' required />
            </div>
            <div className='form-group col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
              <label htmlFor='state'>State</label>
              <select id='state' className='form-control' required>
                <option selected>Select State...</option>
                <option value={1} selected>Queensland</option>
                <option value={2}>New South Wales</option>
              </select>
            </div>
          </div>
          <div className='row mb-2'>
            <div className='form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <label htmlFor='receipt'>Upload payment receipt</label>
              <input type='file' className='form-control' name='receipt' accept='image/*, application/pdf' id='receipt' required />
            </div>
          </div>
          <div className='row mb-2'>
            <div className='form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <label htmlFor='notes'>Additional Notes</label>
              <textarea className='form-control' id='notes' placeholder='Any additional notes' rows={5}></textarea>
            </div>
          </div>
          <div className='row mb-2'>
            <div className='form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <input className='form-check-input' type='checkbox' name='terms' id='terms' required /> &nbsp;
              <label htmlFor='terms'>Accept <a href='/terms' target='_blank'>Terms of services</a></label>
            </div>
            <div className='form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <input className='form-check-input' type='checkbox' name='privacy' id='privacy' required /> &nbsp;
              <label htmlFor='privacy'>Accept <a href='/privacy' target='_blank'>Privacy Policy</a></label>
            </div>
          </div>
          <div className='row mb-2'>
            <button className='btn btn-success w-100'>Complete Order</button>
          </div>
        </form>
      </div>
    </div>}
  </main>
}