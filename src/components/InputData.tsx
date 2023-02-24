import styles from './InputData.module.css';

const InputData = () => {
  return(
    <div className={styles.container}>
      <form>
        <div>
          <span>Tipo: </span>
          <input type='checkbox' id='' name=''/>
          <label>Entrada</label>

          <input type='checkbox' id='' name=''/>
          <label>Saída</label>
        </div>

        <div>
          <label>Valor</label>
          <input type='text' placeholder='R$'/>
        </div>
      </form>
    </div>
  );
}

export default InputData;