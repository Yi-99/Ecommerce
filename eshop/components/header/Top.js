import styles from './styles.module.scss'
import {MdSecurity} from 'react-icons/md'
import {BsSuitHeart} from 'react-icons/bs'
import {RiAccountPinCircleLine, RiArrowDropDownFill} from 'react-icons/ri'

export default function Top() {
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
            <span>Wishlist</span>
          </li>
          <li>
            <div className={styles.flex}>
              <RiAccountPinCircleLine/>
              <span>Account</span>
              <RiArrowDropDownFill/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}