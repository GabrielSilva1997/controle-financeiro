import Transaction from "./Transaction";
import Balance from "./Balance";

import styles from './MonthView.module.css';
import { ITransaction } from "./Dashboard";
import { Receipt } from 'phosphor-react';
import { useState } from "react";

interface Props {
  transactions: ITransaction[];
  onRemove: (transactionID: string) => void;
  month: string;
}

const MonthView = ({transactions, onRemove, month}: Props) =>{
  
  const received = transactions.filter(transaction => transaction.type === 'received').length;
  const spent = transactions.filter(transaction => transaction.type === 'spent').length;

  return(

    <div className={styles.monthView}>

      <h2>{month === '' ? 'MÊS': month.toUpperCase()}</h2> 

      <div className={styles.status}>
        <p>
          Transações <span>{received + spent}</span>
        </p>
        <p>
          Entradas <span>{received}</span>
        </p>
        <p>
          Saídas <span>{spent}</span>
        </p>

      </div>

      <div>
        {transactions.map(transaction =>
          <Transaction
            key={transaction.id}
            transaction={transaction}
            onRemove={onRemove}
          />
        )}

        {transactions.length <= 0 && (<div className={styles.empty}>
          <Receipt className={styles.icon} />
          <p>Você ainda não realizou transações</p>
          <span>Faça uma transação e controle seus gastos</span>
        </div>)}

      </div>

      <div className={styles.balance}>
        <Balance transactions={transactions} /> 
      </div>
    </div>
  );
}

export default MonthView;