import styles from '../styles/pages/Login.module.css';

export default function Login() {
  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginContainer}>
        <img src="/logo-full.svg" alt="Move-it logo" />
        <div>
          <h1>Bem-vindo!</h1>
        </div>
        <div>
          <p>Faça login com seu Github para começar</p>
        </div>
        <button>
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
