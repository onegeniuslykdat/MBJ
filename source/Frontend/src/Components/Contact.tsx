import { Building, Phone, EnvelopeAt } from 'react-bootstrap-icons'
import config from '../config.json'

export const Contact = () => {
  return <div>
    <section className='py-5'>
      <h2 className='text-center mb-4'>Get in Touch</h2>
      <div className='row g-4'>
        <p className='text-center'>If you have any questions or need further information, feel free to reach us through the info below</p>
        <div className='col-xl-4 col-lg-4'>
          <h4 className='text-center'><Building /></h4>
          <p className='text-center fw-bold'>{config.Company.Address}</p>
        </div>
        <div className='col-xl-4 col-lg-4'>
          <h4 className='text-center'><Phone /></h4>
          <p className='text-center fw-bold'>
            <a href={`tel${config.Company.Phone}`}>+{config.Company.Phone}</a>
          </p>
        </div>
        <div className='col-xl-4 col-lg-4'>
          <h4 className='text-center'><EnvelopeAt /></h4>
          <p className='text-center fw-bold'>
            <a href={`mailto${config.Company.Email}`}>{config.Company.Email}</a>
          </p>
        </div>
        {/* <div className='col-12'>
          <h4>Contact Information</h4>
          <p>If you have any questions or need further information, please feel free to contact us through the info below.</p>
          <ul className='list-unstyled'>
            <li className='mb-2'>
              Optionally include an icon using Bootstrap Icons
              <i className='bi bi-geo-alt-fill me-2'></i>*** 123 Food Street, Delicious City
            </li>
            <li className='mb-2'>
              <i className='bi bi-telephone-fill me-2'></i>*** +1 234 567 890
            </li>
            <li className='mb-2'>
              <i className='bi bi-envelope-fill me-2'></i>*** contact@foodstore.com
            </li>
          </ul>
        </div> */}

        {/* <div class="col-md-6">
        <h4>Send Us a Message</h4>
        <form action="#!" method="post">
          <div class="mb-3">
            <label for="fullName" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="fullName" name="fullName" required>
          </div>
          <div class="mb-3">
            <label for="emailAddress" class="form-label">Email Address</label>
            <input type="email" class="form-control" id="emailAddress" name="emailAddress" required>
          </div>
          <div class="mb-3">
            <label for="subject" class="form-label">Subject</label>
            <input type="text" class="form-control" id="subject" name="subject" required>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div> */}
      </div>
    </section>
  </div>
}