import './Header.modules.css'
import igniteLogo from '../assets/ignite-logo.svg'

function Header() {
  return (
  <header className='header'>
    <img src={igniteLogo} alt="Logotipo do Ignite" />
  </header>
  );
}

export default Header
