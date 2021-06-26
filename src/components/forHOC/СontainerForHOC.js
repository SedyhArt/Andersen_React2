import { Test1, Test2, Test3 } from "./Test";
import classes from "./СontainerForHOC.module.css";

const ForHOC = () => {
  return (
    <div className={classes.container}>
      <Test1 text="Я блок цвета аквамарин" />
      <Test2 text="Я блок красного цвета" />
      <Test3 text="Я блок синего цвета" />
      <p>
        Здесь я использую HOC для добавления нужного класса на любой компонент.
        В данном демо задаю одному блоку разные классы.
      </p>
    </div>
  );
};

export default ForHOC;
