import Links from './Links';
import Socials from './Socials';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function Newsletter() {
  return (
    <div className={styles.footer__newsletter}>Newsletter
      <h3>SIGN UP FOR OUR NEWSLETTER</h3>
      <div className={styles.footer__flex}>
        <input type="text" placeholder="Your Email Address" onChange={(e) => setEmail(e.target.value)}/>
        <button className={styles.btn_primary}>SUBSCRIBE</button>
      </div>
      <p>
        By clicking the SUBSCRIBE button, you are agreeing to {" "}
        <Link href="">our Privacy & Cookie Policy</Link>
      </p>
    </div>
  )
}
