import styles from './Balance.module.css';

const Balance = () =>{
  return(
    <div className={styles.balance}>
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