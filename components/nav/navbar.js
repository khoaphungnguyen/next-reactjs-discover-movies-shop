import styles from './navbar.module.css';
import Link from 'next/link'
import { useRouter} from 'next/router';
import { useState } from 'react';
import Image from 'next/image'


const NavBar = (props) => {
    const {username} = props

    const [showDropdown, setShowDropdown] = useState(false);

    const router = useRouter();

    const handleOnClickHome = (e) => {
        e.preventDefault();
        router.push('/')
    
    }

    const handleOnClickList = (e) => { 
        e.preventDefault();
        router.push('/browse/my-lists')
    }

    const handleShowDropdown = (e) => {
        e.preventDefault();
        setShowDropdown(!showDropdown);
    }

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link href="/">
            <a className={styles.logoLink}>
              <div className={styles.logoWrapper}>
                <Image src={"/static/images/netflix.svg"} alt="Nextflix Logo" height="128px" width="80px"/>
              </div>
            </a>
          </Link>

          <ul className={styles.navItems}>
            <li className={styles.navItem} onClick={handleOnClickHome} k>
              Home
            </li>
            <li className={styles.navItem2} onClick={handleOnClickList}>
              My List
            </li>
          </ul>
      <nav className={styles.navContainer}>
            <div>
              <button className={styles.usernameButton} onClick={handleShowDropdown}>
                <p className={styles.username}>{username}<Image src={"/static/images/arrow_drop_down.svg"} alt="Arrow Dropdown Icon" height="24px" width="24px"/></p>
                {/** Expand more icon */}
                
              </button>
              {showDropdown && 
              <div className={styles.navDropdown}>
                <div>
                  <Link href="/login">
                    <a className={styles.linkName}>Sign Out</a>
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>}
            </div>
          </nav>
        </div>
      </div>
    );
};

export default NavBar;