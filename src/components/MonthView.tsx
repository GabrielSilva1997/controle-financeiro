import Transaction from "./Transaction";
import Balance from "./Balance";

import styles from './MonthView.module.css';
import { ITransaction } from "./Dashboard";
import { TbReportMoney } from 'react-icons/tb'

interface Props {
  transactions: ITransaction[];
  onRemove: (transactionID: string) => void;
}

const MonthView = ({transactions, onRemove}: Props) =>{
  const received = transactions.filter(transaction => transaction.type === 'received').length;
  const spent = transactions.filter(transaction => transaction.type === 'spent').length;

  return(

    <div className={styles.monthView}>

      <h2>FEVEREIRO</h2> {/* Mês será dinâmico futuramente*/}

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
          <TbReportMoney className={styles.icon} />
          <p>Você ainda não realizou transações</p>
          <span>Faça uma transação e controle seus gastos</span>
        </div>)}

      </div>

      <div className={styles.balance}>
        <Balance transactions={transactions} /> {/*totalReceived={balanceReceived} />*/}
      </div>
    </div>
  );
}

export default MonthView;