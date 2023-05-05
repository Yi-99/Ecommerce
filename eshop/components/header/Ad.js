import styles from './styles.module.scss'
import Link from 'next/link'

export default function Ad() {
  return (
    <Link to="/browse">
      <div className={styles.ad}></div>  
    </Link>
  )
}