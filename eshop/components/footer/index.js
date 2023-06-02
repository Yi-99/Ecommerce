import styles from './styles.module.scss';
import Links from './Links';
import Socials from './Socials';
import Newsletter from './Newsletter';
import Payment from './Payment';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <Links/>
        <Socials />
        <Newsletter />
        <Payment />
      </div>
    </div>
  )
}
