import styles from './styles.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import {MdSecurity} from 'react-icons/md';
import {BsSuitHeart} from 'react-icons/bs';
import UserMenu from './UserMenu';
import {RiAccountPinCircleLine, RiArrowDropDownFill} from 'react-icons/ri'
import { useSession } from 'next-auth/react'

export default function Top({ country }) {
  const { data: session } = useSession();
  const [male, setMale] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <img src={country?.flag} alt="country flag"/>
            <span>{country?.name} / Won</span>
          </li>
          <li className={styles.li}>
            <MdSecurity/>
            <span>Buyer Protection</span> 
          </li>
          <li className={styles.li}>
          <span>Customer Service</span>
          </li>
          <li className={styles.li}>
          <span>Help</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart/>
            <Link href="/profile/wishlist">
              <span>Wishlist</span>
            </Link>
          </li>
          <li className={styles.li} onMouseOver={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            {
              // when loggedIn is true, then it displays the user's account name that is fetched from the server. Otherwise, it displays the default account icon.
              // ! Add a conditional statement to display either female or male icon for the account after checking the gender of the user.
              session ? (
                <li>
                <div className={styles.flex}>

                  <img src={session.user.image} alt=""/>
                  <span>{session.user.name}</span>
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
            { visible && <UserMenu session={session}/>}
          </li>
        </ul>
      </div>
    </div>
  );
}