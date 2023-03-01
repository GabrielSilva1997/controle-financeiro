import { RadioButton } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './InputData.module.css';

interface Props {
  onSetTransactions: (value: number, type: string) => void;
}

const InputData = ({ onSetTransactions }: Props) => {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('');

  function handleAmount(event: FormEvent) {
    event.preventDefault();

    onSetTransactions(amount, type);

    setAmount(0);
    setType(type);
  }

  function onChangeValue(event: ChangeEvent<HTMLInputElement>) {
    setAmount(parseInt(event.target.value));
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleAmount}>
        <div>
          <span>Tipo: </span>
          
          <input
            type='radio'
            value={type}
            name='typeTransaction'
            id='received'
            onClick={() => {setType('received')} }
            required
          />
          <label className={styles.radioButton} htmlFor='received'>Entrada</label>

          <input 
            type='radio' 
            value={type} 
            name='typeTransaction' 
            id='spent' 
            required 
            onClick={() => {setType('spent')}} 
          />
          <label className={styles.radioButton} htmlFor='spent'>Saída</label>
        </div>

        <div className={styles.inputValue}>
          <label>Valor</label>
          <input 
            type='text' 
            placeholder='R$' 
            value={amount} 
            onChange={onChangeValue} 
            required 
          />
        </div>

        <button type='submit'>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default InputData;