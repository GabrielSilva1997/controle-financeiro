import InputData from "./InputData";
import MonthView from "./MonthView";
import { FormEvent, useState } from "react";

import styles from './Dashboard.module.css';

export interface ITransaction{
  id: string;
  type: string;
  amount: number;
}

const Dashboard = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [month, setMonth] = useState<string>('');
  const listMonths: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

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

    setTransactions(remainingTransactions);
  }

  const selectMonth = (event: FormEvent) =>{
    setMonth(event.target.value);
  }

  return (
    <div className={styles.main}>
      <header className={styles.month}>
        <form>
          <label>Selecione o mês: </label>
          <select  className={styles.months}>
            <option value='' selected> -- Selecione -- </option>
            {listMonths.map(month =>{
              return(
                <option key={month} onClick={selectMonth} value={month}>{month}</option>
              )
            })}
          </select> 
        </form>
      </header>

      <div className={styles.container}>
        <aside>
          <InputData onSetTransactions={addTransaction}/>
        </aside>

        <article>
          <MonthView month={month} transactions={transactions} onRemove={deleteTransactionByID}/>
        </article>
      </div>
    </div>
  );
}

export default Dashboard;