import { ITransaction } from './Dashboard';
import styles from './Transaction.module.css';

interface Props{
  transaction: ITransaction;
}

const Transaction = ({transaction}: Props) =>{
  return(
    <div className={styles.transaction}>
      <p>{transaction.type === 'received' ? 'Entrada' : 'Saída'}</p>
      <p>{transaction.amount}</p>
      <p>lixeira</p>
    </div>
  );
}

export default Transaction;