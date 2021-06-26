import React from "react";

function MyButton(props) {
  const [value, setValue] = React.useState(props.min);

  React.useEffect(() => {
    if (validate(value) === 'min') {
      setValue(props.min);
    }
    if (validate(value) === 'max') {
      setValue(props.max);
    }
  }, [value]);

  let decrease = () => {
    setValue(value - 1);
  };

  let increase = () => {
    setValue(value + 1);
  };

  let handlerChange = (e) => {
    let value = e.target.value;

    if (value <= props.min) {
      value = props.min;
    }
    if (value >= props.max) {
      value = props.max;
    }
    setValue(value);
  };

  let validate = (num) => {
    if (num <= props.min) {
      return 'min';
    }
    if (num >= props.max) {
      return 'max';
    }
    return true;
  };

  return (
    <>
      <button type="button" onClick={decrease}>
        -
      </button>
      <input value={value} onChange={handlerChange} />
      <button type="button" onClick={increase}>
        +
      </button>
    </>
  );
}

export default MyButton;
