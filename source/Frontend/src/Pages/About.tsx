import { AboutUsSummary } from '../Components/AboutUsSummary'
import { Contact } from '../Components/Contact'
import logo from '../Assets/minibanner.png'
import { MiniHeaderBanner } from '../Components/MiniHeaderBanner'

export const About = () => {
    return <main className='container'>
    <MiniHeaderBanner source={logo} />
      <AboutUsSummary />
      <Contact />
    </main>
}