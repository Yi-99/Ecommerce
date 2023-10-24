import styles from './styles.module.scss';
import BiUser from 'react-icons/bi';
import { siMinutemailer } from 'react-icons/si';
import { IoKeyOutline } from 'react-icons/io5';

export default function LoginInput({ icon, placeholder, type }) {
  return (
      <div className={styles.input}>
        {
          icon=="user" ? <BiUser/> : icon=="email" ? <siMinutemailer/> : icon=="password" ? <IoKeyOutline/> : ""
        }
        <input type={type} placeholder={placeholder}/>
      </div>
    );
}