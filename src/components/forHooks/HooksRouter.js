import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import UseCallback from "./UseCallback";
import ContextHook from "./ContextHook";
import Count from "./State-Effect";
import Counter from './UseReducer';

const HooksRouter = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Hooks</h2>
      <ul>
        <li>
          <Link to={`${url}/state-effect`}>
            Использование useState и useEffect
          </Link>
        </li>
        <li>
          <Link to={`${url}/callback-memo`}>Использование useCallback и useMemo</Link>
        </li>
        <li>
          <Link to={`${url}/сontext`}>Использование useContext</Link>
        </li>
        <li>
          <Link to={`${url}/reducer`}>Использование useReducer</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a Hooks.</h3>
        </Route>
        <Route path={`${path}/callback-memo`}>
          <UseCallback numbers={[1, 3, 5, 6, 7]} />
        </Route>
        <Route path={`${path}/сontext`}>
          <ContextHook />
        </Route>
        <Route path={`${path}/state-effect`}>
          <Count min={2} max={6} />
        </Route>
        <Route path={`${path}/reducer`}>
          <Counter />
        </Route>
      </Switch>
    </div>
  );
};

export default HooksRouter;
