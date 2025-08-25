import { AboutUsSummary } from '../Components/AboutUsSummary'
import { Contact } from '../Components/Contact'
import logo from '../Assets/minibanner.png'
import { MiniHeaderBanner } from '../Components/MiniHeaderBanner'

export const Terms = () => {
    return <main className='container'>
    <MiniHeaderBanner source={logo} />
      <AboutUsSummary />
      Terms
      <Contact />
    </main>
}