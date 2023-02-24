import Transaction from "./Transaction";
import Balance from "./Balance";

import styles from './MonthView.module.css';
import { ITransaction } from "./Dashboard";

interface Props{
  transactions: ITransaction[];
}

const MonthView = ({transactions}: Props) =>{
  const received = transactions.filter(transaction => transaction.type === 'Entrada').length;
  const spent = transactions.filter(transaction => transaction.type === 'Saída').length;

  return(
    <div className={styles.monthView}>
      
      <h2>MÊS</h2> {/* Mês será dinâmico futuramente*/}
      
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
        {transactions.map( transaction => <Transaction transaction={transaction}/>)}
      </div>

      <div>
        <Balance />
      </div>
    </div>
  );
}

export default MonthView;