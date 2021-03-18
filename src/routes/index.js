import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Professional from "../pages/professional";
import ProfessionalType, { New } from "../pages/professionalType";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profissionais" component={Professional} />
      <Route path="/tipos-de-profissional" component={ProfessionalType} />
      <Route path="/novo-tipo-de-profissional" component={New} />
    </Switch>
  );
};

export default Routes;
