import PersonList from "./PersonsList";
import Img from "./Rick_and_Morty.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CharacterInfo from "./CharacterInfo";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Link to="/">
        <img src={Img} className="mx-auto" alt="logo" />
      </Link>
      <Switch>
        <Route path="/" exact>
          <PersonList />
        </Route>

        <Route path="/character/:id">
          <CharacterInfo />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
