import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Signin.module.scss'
import {BiLeftArrowAlt} from 'react-icons/bi'
import Link from 'next/link';
import { Formik, Form } from 'formik'
import LoginInput from '../components/inputs/loginInput'
import { useState } from 'react'

const defaultValues = {
  login_email: "",
  login_password: "",
}

const handleChange = (e) => {
  const { name, value } = e.target
}

export default function signin() {
  const [user, setUser] = useState(defaultValues)
  const { login_email, login_password } = user

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
            <div className={styles.login__form}>
              <h1>Sign in</h1>
              <p>Get access to one of the best Eshopping services in the world.</p>
            </div>
            <Formik>
              {
                (form) => {
                  <Form>
                    <LoginInput name="login_email" 
                    type="email" 
                    icon="user" 
                    placeholder="Email Address" 
                    required />
                    <LoginInput name="login_password" 
                    type="text" 
                    icon="password" 
                    placeholder="Password"
                    required />
                  </Form>
                }
              }
            </Formik>
            <form action="">
              <input type="text"/>
              <input type="text"/>
            </form>
          </div>
        </div>
      <Footer country="South Korea"/>
    </div>
  )
}
