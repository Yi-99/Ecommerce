import Link from 'next/link';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { RiSearch2Line } from 'react-icons/ri';
import { MdOutlineShoppingCart } from 'react-icons/md';

export default function Main() {
  const {cart} = useSelector((state) => ({...state}))

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/" legacyBehavior>
          <a className={styles.logo}>
            <img src="../../../logo.png" alt="EShop logo" />
          </a>
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <div className={styles.search__icon}>
            <RiSearch2Line/>
          </div>
        </div>
        <div className={styles.cart}>
          <Link href="/cart" legacyBehavior>
              <a className={styles.cart__container}>
                <MdOutlineShoppingCart/>
                <span style={{color: "black"}}>{cart.length}</span>
              </a>
            </Link>
        </div>
      </div>
    </div>
  );
}
