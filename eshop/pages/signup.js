import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Signup.module.scss'
import Link from 'next/link';

export default function signup() {
  return (
    <div>
      <Header/>
        <div className={styles.login}>
          <div className={styles.login__container}>
            <div className={styles.login__header}>
              <div className={styles.back__svg}>
                <BiLeftArrowAlt/>
              </div>
              <span>
                We'd happy for you to join us! <Link href="/">Go to Store</Link>
              </span>
            </div>
          </div>
        </div>
      <Footer country="South Korea"/>
    </div>
  )
}
