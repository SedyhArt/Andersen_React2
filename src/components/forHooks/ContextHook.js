import React from "react";

import { ThemeContext } from "../../App";

const ContextHook = () => {
  const theme = React.useContext(ThemeContext);
  return <p style={{...theme, width: '200px'}}>Стили из онтекста</p>;
};

export default ContextHook;
