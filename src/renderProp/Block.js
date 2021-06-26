import React, { useState } from "react";

const Block = (props) => {
  
  const [day, setDay] = useState("Monday");
  const dayHandler = () => setDay("Friday");

  return (
    <>
      <h2>News</h2>
      <h3>Today is {day}</h3>
      {props.render(day)}
      {day === 'Friday' ? <span>Вперед веселиться!</span> 
      : 
      <button
        onClick={dayHandler}
        style={{ background: "red", width: "200px", height: "100px", fontSize: '20px'}}
      >
        Хотите пятницу? Жмите
      </button> }
    </>
  );
};

export default Block;
