import { ITransaction } from './Dashboard';

import { Trash } from 'phosphor-react';
import styles from './Transaction.module.css';

interface Props{
  transaction: ITransaction;
  onRemove: (transactionID: string) => void;
}

const Transaction = ({transaction, onRemove}: Props) =>{
  return(
    <div className={styles.transaction}>
      <p>{transaction.type === 'received' ? 'Entrada' : 'Saída'}</p>
      <p>{transaction.amount}</p>
      <button onClick={() => onRemove(transaction.id)}>
        <Trash />
      </button>
    </div>
  );
}

export default Transaction;