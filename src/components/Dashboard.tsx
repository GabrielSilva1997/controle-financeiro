import InputData from "./InputData";
import MonthView from "./MonthView";
import { useState } from "react";

import styles from './Dashboard.module.css';

export interface ITransaction{
  id: string;
  type: string;
  amount: number;
}

const Dashboard = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  function addTransaction(amount: number, type: string){
    setTransactions([
      ...transactions,
      {
        id: crypto.randomUUID(),
        type: type,
        amount: amount
      }
    ])
  }

  return (
    <div className={styles.main}>
      <header className={styles.month}>
        <form>
          <label>Selecione o mês: </label>
          <input/> {/* Receberá um lista de meses a ser escolhido. Ver qual tag melhor se encaixa*/} 
        </form>
      </header>

      <div className={styles.container}>
        <aside>
          <InputData onSetTransactions={addTransaction}/>
        </aside>

        <article>
          <MonthView transactions={transactions}/>
        </article>
      </div>


    </div>
  );
}

export default Dashboard;