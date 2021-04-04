import { useEffect, useState } from 'react';
import { signOut } from 'next-auth/client';
import styles from '../styles/components/NavBar.module.css';

export function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      setDarkMode(true);
    }
  }

  useEffect(() => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
      document.documentElement.classList.remove('transition');
    }, 500);
  }, [darkMode]);

  return (
    <nav className={styles.navBar}>
      <img src="/logo-inverted.svg" alt="Move-it logo" />
      <div>
        <ul>
          <li><a href="3" onClick={() => signOut()}>Logout</a></li>
        </ul>
      </div>
      <span>
        <input type="checkbox" id="switch" onChange={toggleDarkMode} />
        <label htmlFor="switch">Toggle</label>

      </span>
    </nav>
  );
}
