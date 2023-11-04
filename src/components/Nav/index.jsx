import { FaHouseChimney } from "react-icons/fa6";
import { Link } from "react-router-dom"
import Styles from './Nav.module.css'
const Nav = () => (
    <div className='container'>
      <div className={Styles.nav}>
      <div className={Styles.item} > <Link className={Styles.inicio} to='/'><FaHouseChimney /></Link></div>
            <div className={Styles.item} > <Link className={Styles.menu}  to='/solteiros'>Solteiros</Link> </div>
            <div className={Styles.item} ><Link className={Styles.menu} to='/casal'> Casal</Link></div>
            <div className={Styles.item} ><Link className={Styles.menu} to='/familia'> familia</Link></div>

      </div>
      </div>
)

export default Nav