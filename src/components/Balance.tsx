import styles from './Balance.module.css';
import { ITransaction } from './Dashboard';

interface Props{
  transactions: ITransaction[];
}

const Balance = ({transactions}: Props) =>{
  const received = transactions.filter(transaction => transaction.type === 'received');
  const spent = transactions.filter(transaction => transaction.type === 'spent');

  const balanceReceived = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'received') {
      acc.received += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.spent += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    received: 0,
    spent: 0,
    total: 0,
  })

  return(
    <div className={styles.balance}>
      <div className={styles.recebido}> {/* Mudar nome para inglês */}
        <p>Total recebido</p> 
        <span>{balanceReceived.received}</span>
      </div>

      <div className={styles.gasto}> {/* Mudar nome para inglês */}
        <p>Total gasto</p>
        <span>{balanceReceived.spent}</span>
      </div>
    </div>
  );
}

export default Balance;


