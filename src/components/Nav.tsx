
import styles from './Nav.module.css';

import logo from '../images/logo.svg';
import closeMenu from '../images/icon-menu-close.svg';

interface Props {
  mobileOpen: boolean;
  setMobile: Function;
}

const Nav = (props: Props) => {

  const handleMobile = () => {
    props.setMobile(!props.mobileOpen);
    console.log(props.mobileOpen);
  }

  let menuOpen = props.mobileOpen ? styles.navButtonsOpen : "";

  return (
    <div className={styles.nav}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.hamburgerMenu} onClick={handleMobile}></div>

      <ul className={`${styles.navButtons} ${menuOpen}`}>
        <div className={styles.closeMenu}>
          <img
            src={closeMenu}
            alt={"Close Menu"}
            onClick={handleMobile}
          />
        </div>
        <li><a href="#">Home</a></li>
        <li><a href="#">New</a></li>
        <li><a href="#">Popular</a></li>
        <li><a href="#">Trending</a></li>
        <li><a href="#">Categories</a></li>
      </ul>
    </div>
  )
}

export default Nav;