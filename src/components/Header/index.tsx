import { SignInButton } from '../SigninButton'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="logo ig news" />
        <nav>
          <a className={styles.active}>HOME</a>
          <a>POSTS</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}