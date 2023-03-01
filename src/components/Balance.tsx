import styles from './Balance.module.css';
import { ITransaction } from './Dashboard';

/*interface Props{
  totalReceived: ITransaction;
}*/

const Balance = ({/*totalReceived}: Props*/}) =>{
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