import Menu from "./Menu";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Navbar.css';
export default function Navbar () {
  return(
    <div className = 'nav'>
     <Menu />
     <div className = 'h'>
     <h1>Lorem</h1>
     </div>
     
     <ShoppingCartIcon color="secondary" style={{ fontSize: 40}} className = 'icon' />
     
     
      </div>
  )
}
