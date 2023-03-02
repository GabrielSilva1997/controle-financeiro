import { ITransaction } from './Dashboard';

import { Trash } from 'phosphor-react';
import styles from './Transaction.module.css';

interface Props{
  transaction: ITransaction;
  onRemove: (transactionID: string) => void;
}

const Transaction = ({transaction, onRemove}: Props) =>{
  return(
    <>
      {transaction.type === 'received' ? 
        <div className={styles.in}>
          <p>Entrada</p> 
          <p>{transaction.amount}</p>
          <button className={styles.removeButton} onClick={() => onRemove(transaction.id)}>
            <Trash size={24}/>
          </button>
        </div>: 
        <div className={styles.out}>
          <p>Saída</p> 
          <p>{transaction.amount}</p>
          <button className={styles.removeButton} onClick={() => onRemove(transaction.id)}>
            <Trash size={24}/>
          </button>
        </div>
     }
    </>
  );
}

export default Transaction;