import { Instagram } from 'react-bootstrap-icons'
import config from '../../config.json'

export const Footer = () => {
    return <footer className="footer">
      <div className='row mt-2'>
        <p className='text-center'>
          <a title='Instagram' href={config.Company.Socials.Instagram.Url}><Instagram /></a>
        </p>
        <p className='text-center'>© {config.Company.Name} {new Date().getFullYear()}. <span>All rights reserved.</span></p>
      </div>
  </footer>
}