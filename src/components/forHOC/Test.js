import classes from "./text.module.css";
import withClassName from "../../hoc/withClassName";

const test = (props) => {
  return (
    <>
      <span>{props.text}</span>
    </>
  );
};

export const Test1 = withClassName(test, classes.aquamarine);
export const Test2 = withClassName(test, classes.red);
export const Test3 = withClassName(test, classes.blue);