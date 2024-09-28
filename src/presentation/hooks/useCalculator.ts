import {useEffect, useRef, useState} from 'react';

enum Operators {
  add = '=',
  substract = '-',
  multiply = 'X',
  divide = '/',
}

export const useCalculator = () => {
  const [number, setNumber] = useState<string>('0');
  const [prevNumber, setPrevNumber] = useState<string>('0');
  const lastOperators = useRef<Operators>();
  const [formula, setFormula] = useState<string>('');

  useEffect(() => {
    if (lastOperators.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperators.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();

    setPrevNumber(`${subResult}`);
  }, [formula]);

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(prevState => prevState + numberString);
      }

      if (numberString === '0' && number.includes('.')) {
        return setNumber(prevSate => prevSate + number);
      }

      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      if (numberString === '0' && !number.includes('.')) {
        return;
      }
      return setNumber(prevState => prevState + numberString);
    }

    setNumber(prevState => prevState + numberString);
  };
  const clearScreen = () => {
    setNumber('0');
    setPrevNumber('0');
    lastOperators.current = undefined;
    setFormula('');
  };
  const deleteOperation = () => {
    // setNumber(prevState => {
    //   return prevState.replace(prevState[prevState.length - 1], '');
    // });
    let currentSign = '';
    let temporalNumber = number;

    if (number.includes('-')) {
      currentSign = '-';
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      // eliminar la ultima posicion
      setNumber(currentSign + temporalNumber.slice(0, -1));
    } else setNumber('0');
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(prevState => prevState.replace('-', ''));
    } else {
      return setNumber(prevState => '-' + prevState);
    }
  };

  const setLastNumber = () => {
    calculateResult();

    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperators.current = Operators.divide;
  };
  const multiplyOperation = () => {
    setLastNumber();
    lastOperators.current = Operators.multiply;
  };
  const substractOperation = () => {
    setLastNumber();
    lastOperators.current = Operators.substract;
  };
  const addOperation = () => {
    setLastNumber();
    lastOperators.current = Operators.add;
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(`${result}`);
    lastOperators.current = undefined;
    setPrevNumber('0');
  };
  const calculateSubResult = (): number => {
    const [val1, operator, val2] = formula.split(' ');

    const num1 = +val1;
    const num2 = +val2;

    if (isNaN(num2)) return num1;

    switch (lastOperators.current) {
      case Operators.add:
        return num1 + num2;
        break;
      case Operators.substract:
        return num1 - num2;
        break;
      case Operators.divide:
        return num1 / num2;
        break;
      case Operators.multiply:
        return num1 * num2;
        break;

      default:
        throw new Error('operacion no valida');
    }
  };

  return {
    number,
    prevNumber,
    formula,
    buildNumber,
    clearScreen,
    toggleSign,
    deleteOperation,
    addOperation,
    multiplyOperation,
    substractOperation,
    divideOperation,
    calculateResult,
  };
};
