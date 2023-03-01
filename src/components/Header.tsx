import styles from './Header.module.css';
import { Wallet } from 'phosphor-react';

const Header = () =>{
  return(
    <header className={styles.header}>
      <Wallet size={50} />
      <p>Controle Financeiro</p>
    </header>
  );
}

export default Header;