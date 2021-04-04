import { signIn } from 'next-auth/client';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.logoContainer}>
        <div className={styles.logo1}></div>
        <div className={styles.logo2}></div>
        <div className={styles.logo3}></div>
      </div>
      <div className={styles.loginContainer}>
        <img
          src="/logo-inverted.svg"
          alt="Move-it logo"
          className={styles.moveItLogo}
        />
        <div>
          <h1>Bem-vindo!</h1>
        </div>
        <div>
          <p>Faça login com seu Github para começar</p>
        </div>
        <button onClick={() => signIn()}>
          <img src="/icons/github.svg" alt="Github Logo" />
          Login com o Github
        </button>
      </div>
      <footer>
        <div>
          ©Moises Almeida 2021, adapted from Rocketseat. Github icon by{' '}
          <a
            href="https://www.flaticon.com/br/autores/dave-gandy"
            title="Dave Gandy"
          >
            Dave Gandy
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/br/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </div>
  );
}
