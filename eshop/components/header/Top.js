import styles from './styles.module.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {MdSecurity} from 'react-icons/md'
import {BsSuitHeart} from 'react-icons/bs'
import UserMenu from './UserMenu';
import {RiAccountPinCircleLine, RiArrowDropDownFill} from 'react-icons/ri'

export default function Top() {
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <ul className={styles.top__list}>
          <li>
            <img src="https://static.vecteezy.com/system/resources/previews/011/571/524/original/circle-flag-of-south-korea-free-png.png" alt="South Korean flag"/>
            <span>South Korea / Won</span>
          </li>
          <li>
            <MdSecurity/>
            <span>Buyer Protection</span> 
          </li>
          <li>
          <span>Customer Service</span>
          </li>
          <li>
          <span>Help</span>
          </li>
          <li>
            <BsSuitHeart/>
            <Link href="/profile/wishlist">
              <span>Wishlist</span>
            </Link>
          </li>
          <li>
            {
              // when loggedIn is true, then it displays the user's account name that is fetched from the server. Otherwise, it displays the default account icon.
              // ! Add a conditional statement to display either female or male icon for the account after checking the gender of the user.
              loggedIn ? (
                <li>
                <div className={styles.flex}>
                  
                  <img src="https://www.pngart.com/files/5/User-Avatar-PNG-Transparent-Image.png"
                  alt="Profile Picture"/>
                  <span>Account</span>
                  <RiArrowDropDownFill/>
                </div>
              </li>) : (
                <li>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine/>
                  <span>Account</span>
                  <RiArrowDropDownFill/>
                </div>
              </li>)
            }
            <UserMenu loggedIn={loggedIn}/>
          </li>
        </ul>
      </div>
    </div>
  );
}