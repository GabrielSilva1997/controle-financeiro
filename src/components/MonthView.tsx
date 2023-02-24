import Transaction from "./Transaction";
import Balance from "./Balance";

import styles from './MonthView.module.css';

const MonthView = () =>{
  return(
    <div className={styles.monthView}>
      <h2>MÊS</h2> {/* Mês será dinâmico futuramente*/}
      <div>
        <Transaction />
        <Transaction />
       
      </div>

      <div>
        <Balance />
      </div>
    </div>
  );
}

export default MonthView;