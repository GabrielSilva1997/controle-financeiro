import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './InputData.module.css';

interface Props{
  onSetTransactions: (value: number, type: string) => void;
}

const InputData = ({onSetTransactions}: Props) => {
  const [valueTransaction, setValueTransaction] = useState(0);
  const [typeTransaction, setTypeTransaction] = useState('');

  function handleValueTransaction(event: FormEvent){
    event.preventDefault();
    
    onSetTransactions(valueTransaction, typeTransaction);

    setValueTransaction(0);
    setTypeTransaction('');
  }

  function onChangeValue(event: ChangeEvent<HTMLInputElement>){
    setValueTransaction(parseInt(event.target.value));
  }

  function onClickType(event: FormEvent ){
    const type = event.target.value;
    type === 'received' ? setTypeTransaction('Entrada') : setTypeTransaction('Saída');
  }

  return(
    <div className={styles.container}>
      <form onSubmit={handleValueTransaction}>
        <div>
          <span>Tipo: </span>

          <input type='radio' value="received" name='typeTransaction' id='received' required onClick={onClickType}/>
          <label htmlFor='received'>Entrada</label>

          <input type='radio' value="spent" name='typeTransaction' id='spent' required onClick={onClickType}/>
          <label htmlFor='spent'>Saída</label>
        </div>

        <div>
          <label>Valor</label>
          <input type='text' placeholder='R$' onChange={onChangeValue} required/>
        </div>

        <button type='submit'>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default InputData;