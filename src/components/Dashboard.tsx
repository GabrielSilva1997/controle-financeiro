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

  function deleteTransactionByID(transactionID: string){
    const remainingTransactions = transactions.filter(transaction => transaction.id !== transactionID);

    console.log(remainingTransactions);

    setTransactions(remainingTransactions);
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
          <MonthView transactions={transactions} onRemove={deleteTransactionByID}/>
        </article>
      </div>
    </div>
  );
}

export default Dashboard;