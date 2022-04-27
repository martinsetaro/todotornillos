import './header.scss';
import NavBar from './NavBar';


const Header = () => {
  return (<>
  <div className="header">
      <h1 className="header__text-logo" title="Cine Home" alt="Cine Home">Todo Tornillo</h1>
      <NavBar/>
      </div>
      </>
      
  )
}

export default Header;