import styles from './Transaction.module.css';

const Transaction = () =>{
  return(
    <div className={styles.transaction}>
      <p>entrada</p>
      <p>valor</p>
      <p>lixeira</p>
    </div>
  );
}

export default Transaction;