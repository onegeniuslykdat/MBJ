import logo from '../Assets/minibanner.png';
import { MiniHeaderBanner } from '../Components/MiniHeaderBanner';
import { CartContext } from "../Context/CartContext";
import { Link } from 'react-router-dom';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { useContext, useState, useEffect } from 'react';
import CartProduct from '../Models/CartProduct';
import { OrderMode } from '../Models/OrderMode';
import config from '../config.json';
//import Order from '../Models/Order';
import Customer from '../Models/Customer';
import { CartServices } from '../Services/CartServices';
import Cart from '../Models/Cart';
import { CartStatus } from '../Models/CartStatus';

export const Checkout = () => {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext?.cart?.products as CartProduct[];
  const now = new Date();

  const [isDelivery, setIsDelivery] = useState(false);
  const [addressConfirmed, setAddressConfirmed] = useState(false);
  const [deliveryFee, setDeliveryFee] = useState(0);

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [suburb, setSuburb] = useState('');
  const [postcode, setPostcode] = useState('');
  const [state, setState] = useState('');
  const [notes, setNotes] = useState('');
  //const [receipt, setReceipt] = useState<File | undefined>();

  //const [order, setOrder] = useState<Order | undefined>();
  const [btnText, setBtnText] = useState('Complete Order');
  const [btnDisabled, setBtnDisabled] = useState(false);

  const toggleShowAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDelivery(e.currentTarget.id === OrderMode.DELIVERY);
    if (e.currentTarget.id === OrderMode.PICKUP) {
      setDeliveryFee(0);
      setAddress('');
      setSuburb('');
      setPostcode('');
      setState('');
      setAddressConfirmed(false);
    }
  };

  useEffect(() => {
    if (addressConfirmed) {
      // get address from customer
      const customerFullAddress: string = `${address} ${suburb} ${state} ${postcode}`;
      const companyFullAddress: string = `${config.Company.Address} ${config.Company.Suburb} ${config.Company.State} ${config.Company.PostCode}`
      const fullMapsAPIUrl = `${config.MapsFunctionApp.Url}`;

      // fetch distance and time from Google API
      fetch(fullMapsAPIUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          destinations: customerFullAddress,
          origins: companyFullAddress
        })
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let distance = data.distance.value / 1000;
          let time = data.duration.value / 60;
          // set delivery cost
          const deliveryCost: number = ((config.DeliveryDistanceWeight * config.DeliveryCostPerDistance * distance)) + (config.DeliveryTimeWeight * config.DeliveryCostPerTime * time);
          setDeliveryFee(parseFloat(deliveryCost.toFixed(2)));
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [address, addressConfirmed, postcode, state, suburb])

  const setAddressAndDelivery = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (address !== '' && suburb !== '' && state === '') {
      setAddressConfirmed(true);
    } else {
      alert('Please complete the address details');
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // disable button
    setBtnText('Processing... Please wait');
    setBtnDisabled(true);

    // update cart
    let newCartDetails = {
      status: CartStatus.PAID,
      customer: {
        email,
        phone,
        firstName: fname,
        lastName: lname,
        addressLine: address,
        suburb,
        postcode,
        state
      } as Customer
    } as Cart;
    let updatedCart = CartServices.EditCart(cartContext?.cart as Cart, newCartDetails);
    cartContext?.setCart(updatedCart);

    // update order:
    // set order address, customer, mode, products, notes, receipt, total cost
    // let newOrder = {
    //   id: parseInt(now.getMonth() + now.getDate() + phone.substring(6) + now.getHours() + now.getMinutes() + now.getSeconds()),
    //   customer: newCartDetails.customer,
    //   orderMode: isDelivery ? OrderMode.DELIVERY : OrderMode.PICKUP,
    //   addressLine: address,
    //   suburb: suburb,
    //   postcode: postcode,
    //   products: newCartDetails.products, //cartItems?
    //   notes: notes,
    //   receipt: receipt,
    //   totalCost: deliveryFee + cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0)
    // } as Order;
    // setOrder(newOrder);

    // send email with receipt
    emailjs.sendForm(config.EmailJs.ServiceID, config.EmailJs.TemplateID, e.currentTarget, config.EmailJs.PublicKey)
      .then((res: EmailJSResponseStatus) => {
        alert('Email succesfully sent. Thank you for placing your order.');
        // new and clean cart
        cartContext?.setCart(CartServices.CreateNewCart());
        //e.currentTarget.reset(); //causes error, try refreshing page
        window.location.reload();
        //navigate(0);
      }, (err: EmailJSResponseStatus) => {
        alert('Email sending failed');
        console.log(err)
      })

    // back to original state
    setBtnText('Complete Order');
    setBtnDisabled(false);
    e.preventDefault();
  }

  return <main className='container'>
    <MiniHeaderBanner source={logo} />
    <div className='row'>
      <h1 className='text-center'>Your Order</h1>
      {/* <h5 className='text-center'>#{`${500111}`}</h5> */}
    </div>
    {cartItems.length < 1 && <div className='row'>
      <h5 className='text-center'>No items ordered</h5>
    </div>}
    {cartItems.length >= 1 && <div className='row'>
      <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
        <form onSubmit={(e) => handleSubmit(e)} encType='multipart/form-data'>
          <div className='row mb-2'>
            <div className='form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <label htmlFor='fname'>First Name</label>
              <input type='text' className='form-control' name='fname' id='fname' placeholder='First name' required value={fname} onChange={(e) => setFname(e.currentTarget.value)} />
            </div>
            <div className='form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <label htmlFor='lname'>Last name</label>
              <input type='text' className='form-control' name='lname' id='lname' placeholder='Last name' required value={lname} onChange={(e) => setLname(e.currentTarget.value)} />
            </div>
            <div className='form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <label htmlFor='email'>Email</label>
              {/* <!--<em>(You will receive an email with your invoice)</em>--> */}
              <input type='email' className='form-control' name='email' id='email' placeholder='Email' required value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
            </div>
            <div className='form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <label htmlFor='phone'>Phone number</label>
              <input type='tel' className='form-control' name='phone' id='phone' placeholder='Phone number' required value={phone} onChange={(e) => setPhone(e.currentTarget.value)} />
            </div>
          </div>
          <hr />

          <div className='row mb-2'>
            <div className='form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <input className='form-check-input' type='radio' name="orderMode" value={OrderMode.PICKUP} title='pickup' id={OrderMode.PICKUP} checked={!isDelivery} onChange={(e) => toggleShowAddress(e)} />
              <label className='form-check-label' htmlFor='Pickup' id='labelPickup'>&nbsp; {OrderMode.PICKUP}</label>
              <br />
              <input className='form-check-input' type='radio' name="orderMode" value={OrderMode.DELIVERY} title='delivery' id={OrderMode.DELIVERY} checked={isDelivery} onChange={(e) => toggleShowAddress(e)} />
              <label className='form-check-label' htmlFor='Delivery' id='labelDelivery'>&nbsp; {OrderMode.DELIVERY}</label>
            </div>
          </div>
          {isDelivery && !addressConfirmed &&
            <div className='row mb-2'>
              <div className='form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <label htmlFor='address'>Address (House no, Street number and/or name)</label>
                <input type='text' className='form-control' id='address' placeholder='House 4, 10 Spirit street' required value={address} onChange={(e) => setAddress(e.currentTarget.value)} />
              </div>
              <div className='form-group col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                <label htmlFor='suburb'>Suburb</label>
                <input type='text' className='form-control' name='suburb' id='suburb' placeholder='Brisbane' required value={suburb} onChange={(e) => setSuburb(e.currentTarget.value)} />
              </div>
              <div className='form-group col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                <label htmlFor='postcode'>Postcode</label>
                <input type='text' className='form-control' name='postcode' id='postcode' placeholder='4000' required value={postcode} onChange={(e) => setPostcode(e.currentTarget.value)} />
              </div>
              <div className='form-group col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                <label htmlFor='state'>State</label>
                <select id='state' className='form-control form-select' required value={state} onChange={(e) => setState(e.currentTarget.value)}>
                  <option value={'Queensland'}>Queensland</option>
                  <option value={'New South Wales'}>New South Wales</option>
                </select>
              </div>
              <div className='form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-2'>
                <button className='btn btn-warning w-100' id='confirmAddress' onClick={(e) => setAddressAndDelivery(e)}>Confirm Address</button>
              </div>
            </div>}
          {
            isDelivery && addressConfirmed &&
            <div className='row mb-2'>
              <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 mt-2'>
                <h6>Delivery Address: {`${address} ${suburb} ${state} ${postcode}`}</h6>
              </div>
              <div className='form-group col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-2'>
                <button className='btn btn-info w-100' id='editAddress' onClick={() => setAddressConfirmed(false)}>Change Address</button>
              </div>
            </div>
          }
          <hr />

          {(!isDelivery || (isDelivery && addressConfirmed)) &&
            <div className='row mb-4'>
              <h5 className='text-center'>Your Items</h5>
              <table className='table table-striped table-bordered'>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Product</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        <Link to={`/MBJ/shop/products/${item.product.id}`}>
                          <img src={item.product.imageUrl} className='img-thumbnail' width={80} alt={item.product.name} />
                        </Link>
                      </td>
                      <td>${item.quantity * item.product.price}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Total: ${cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0)}</td>
                  </tr>
                </tfoot>
              </table>
              <div className='panel'>
                <h5>Account details</h5>
                <h6>Make payment using the following details</h6>
                <ul>
                  <li>Account Name: {config.Company.BankDetails.AccountName}</li>
                  <li>Account Number: {config.Company.BankDetails.AccountNumber}</li>
                  <li>Bank: {config.Company.BankDetails.Bank}</li>
                  <li>BSB: {config.Company.BankDetails.BSB}</li>
                  <li>Payment narration/description: {phone !== '' ? phone : '[Your phone number]'}</li>
                </ul>
                <h5>Order Total: ${deliveryFee + (cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0))}</h5>
                <ul>
                  <li>Items: ${cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0)}</li>
                  <li>Delivery: ${deliveryFee}</li>
                </ul>
              </div>
            </div>
          }
          <hr />

          {(!isDelivery || (isDelivery && addressConfirmed)) && <>
            <div className='row mb-2'>
              <div className='form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <label htmlFor='receipt'>Upload payment receipt (Max size: 45kb)</label>
                <input type='file' className='form-control' name='attachment' accept='image/*, application/pdf' id='receipt' required onChange={(e) => {
                  if(e.target.files === null || e.target.files[0].size > 46080) {
                    alert('Please upload a file smaller than 45kb');
                    e.target.value = '';
                  } //else {
                    //setReceipt(e.target.files !== null ? e.target.files[0] : undefined);
                  //}                  
                  }} />
              </div>
            </div>
            <div className='row mb-2'>
              <div className='form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <label htmlFor='notes'>Additional Notes</label>
                <textarea className='form-control' id='notes' placeholder='Any additional notes' rows={5} value={notes} onChange={(e) => setNotes(e.currentTarget.value)}></textarea>
              </div>
            </div>
            <div className='row mb-2'>
              <div className='form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                <input className='form-check-input' type='checkbox' name='terms' id='terms' required /> &nbsp;
                <label htmlFor='terms'>Accept <Link to='MBJ/terms' target='_blank'>Terms of services</Link></label>
              </div>
              <div className='form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                <input className='form-check-input' type='checkbox' name='privacy' id='privacy' required /> &nbsp;
                <label htmlFor='privacy'>Accept <Link to='MBJ/privacy' target='_blank'>Privacy Policy</Link></label>
              </div>
            </div>
            <div className='row mb-2'>
              <button type='submit' className='btn btn-success w-100' disabled={btnDisabled}>{btnText}</button>
              <div>
                <input type='hidden' name='to' id='to' value={email} />
                <input type='hidden' name='orderId' id='orderId' value={parseInt(now.getMonth() + now.getDate() + phone.substring(6) + now.getHours() + now.getMinutes() + now.getSeconds())} />
                <input type='hidden' name='orderText' id='orderText' value={cartItems.map(i => `${i.quantity} - ${i.product.name}`).join('; ')} />
                <input type='hidden' name='itemsCost' id='itemsCost' value={cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0)} />
                <input type='hidden' name='orderAdd' id='orderAdd' value={isDelivery ? `${address} ${suburb} ${state} ${postcode}` : ''} />
                <input type='hidden' name='deliveryFee' id='deliveryFee' value={deliveryFee} />
                <input type='hidden' name='totalCost' id='totalCost' value={deliveryFee + cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0)} />
              </div>
            </div>
          </>}
        </form>
      </div>
    </div>}
  </main>
}