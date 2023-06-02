import styles from './styles.module.scss';
import Link from 'next/link';
import femaleAvatar from '../../public/avatar-female.png';
import maleAvatar from '../../public/avatar-male.png';

export default function UserMenu({loggedIn}) {
    return (
        <div className={styles.menu}>
            <h4>Welcome to Eshop</h4>
            {
                loggedIn ? (
                <div className={styles.flex}>
                    <img src={femaleAvatar}
                    alt="Profile Picture"
                    className={styles.menu__img}/>
                    <div className={styles.col}>
                        <span>Welcome Back, </span>
                        <h3>USERNAME</h3>
                        <span>Sign Out</span>
                    </div>
                </div>) : (
                    <div className={styles.flex}>
                        <button className={styles.btn_primary}>Register</button>
                        <button className={styles.btn_secondary}>Login</button>
                    </div>
            )}
            <ul>
                <li>
                    <Link href="/profile">Account</Link>
                </li>
                <li>
                    <Link href="/profile/orders">My Orders</Link>
                </li>
                <li>
                    <Link href="/profile/messages">Message Center</Link>
                </li>
                <li>
                    <Link href="/profile/address">Address</Link>
                </li>
                <li>
                    <Link href="/profile/wishlist">Wishlist</Link>
                </li>
            </ul>
        </div>
    )
}