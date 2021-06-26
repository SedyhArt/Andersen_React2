import React from "react";
import PropTypes from "prop-types";

const ListOfNumbers = (props) => {
  const [numbers, setNumbers] = React.useState(props.numbers);
  const [valueInputNumber, setValueInputNumber] = React.useState("");

  const returnToInitialState = React.useCallback(() => {
    setNumbers(numbers);
  }, []);

  const calcSum = (numbers) => numbers.reduce((item, acc) => item + acc);
  const memoizedSum = React.useMemo(() => calcSum(numbers), [numbers]);

  const handlerListOfNumbers = () => {
    console.log(valueInputNumber);
    if (valueInputNumber !== "") {
      setNumbers([...numbers, valueInputNumber]);
      setValueInputNumber("");
    }
  };

  const onChangeInputNumber = (e) => {
    e.preventDefault();
    let value = +e.target.value;
    console.log(value);
    console.log(numbers, "это numbers");

    if (typeof value === "number" && !isNaN(value)) {
      console.log(value, "это введеная цифра");
      setValueInputNumber(value);
    }
  };

  return (
    <div>
      <h1>Использование useCallback</h1>
      <p>
        Этот компонент принимает в виде пропсов массив, преобразует его в
        список. Можно добавить новые элементы списка, а по клику на кнопку можно
        вернуть начальное значение списка.
      </p>
      <ul>
        {numbers.map((item, index) => {
          console.log(item, "это item");
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <h3>{`Сумма всех цифр - ${memoizedSum}`}</h3>
      <input value={valueInputNumber} onChange={onChangeInputNumber}></input>
      <button onClick={handlerListOfNumbers}>Добавить цифру</button>
      <button onClick={returnToInitialState}>Вернуть начальное значение</button>
    </div>
  );
};

ListOfNumbers.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number),
};

export default ListOfNumbers;
