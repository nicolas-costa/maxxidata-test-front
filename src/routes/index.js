import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Professional from "../pages/professional";
import ProfessionalType from "../pages/professionalType";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profissionais" component={Professional} />
      <Route path="/tipos-de-profissional" component={ProfessionalType} />
    </Switch>
  );
};

export default Routes;
