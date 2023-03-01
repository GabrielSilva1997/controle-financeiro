import styles from './Balance.module.css';
import { ITransaction } from './Dashboard';

interface Props{
  transactions: ITransaction[];
}

const Balance = ({transactions}: Props) =>{
  const received = transactions.filter(transaction => transaction.type === 'received');
  const spent = transactions.filter(transaction => transaction.type === 'spent');

  return(
    <div className={styles.balance}>
      console.log()
      <div className={styles.recebido}> {/* Mudar nome para inglês */}
        <p>Total recebido</p> 
        <span>valor</span>
      </div>

      <div className={styles.gasto}> {/* Mudar nome para inglês */}
        <p>Total gasto</p>
        <span>valor</span>
      </div>
    </div>
  );
}

export default Balance;


