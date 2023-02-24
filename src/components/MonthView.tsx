import Transaction from "./Transaction";
import Balance from "./Balance";

import styles from './MonthView.module.css';

const MonthView = () =>{
  return(
    <div>
      <div>
        <Transaction />
      </div>

      <div>
        <Balance />
      </div>
    </div>
  );
}

export default MonthView;