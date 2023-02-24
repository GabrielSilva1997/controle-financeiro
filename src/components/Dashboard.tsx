import InputData from "./InputData";
import MonthView from "./MonthView";

import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.main}>
      <header>
        <input></input> {/* Receberá um lista de meses a ser escolhido. Ver qual tag melhor se encaixa*/} 
      </header>

      <div className={styles.container}>
        <aside>
          <InputData />
        </aside>

        <article>
          <MonthView />
        </article>

      </div>


    </div>
  );
}

export default Dashboard;