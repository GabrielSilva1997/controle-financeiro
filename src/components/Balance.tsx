import styles from './Balance.module.css';
import { ITransaction } from './Dashboard';

interface Props{
  transactions: ITransaction[];
}

const Balance = ({transactions}: Props) =>{
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
      <div className={styles.received}> 
        <p>Recebido: </p> 
        <span>{`R$ ${balanceReceived.received}`}</span>
      </div>

      <div className={styles.spent}> 
        <p>Gasto:</p>
        <span>{`R$ ${balanceReceived.spent}`}</span>
      </div>

      <div className={styles.diference}> 
        <p>Saldo:</p>
        <span>{`R$ ${balanceReceived.received - balanceReceived.spent}`}</span>
      </div>

    </div>
  );
}

export default Balance;


