import { AboutUsSummary } from '../Components/AboutUsSummary'
import { Contact } from '../Components/Contact'
import logo from '../Assets/minibanner.png'
import { MiniHeaderBanner } from '../Components/MiniHeaderBanner'

export const Privacy = () => {
    return <main className='container'>
    <MiniHeaderBanner source={logo} />
      <AboutUsSummary />
      Privacy
      <Contact />
    </main>
}