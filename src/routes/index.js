import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Professional, { New as NewProfessional } from "../pages/professional";
import ProfessionalType, { New as NewProfessionalType } from "../pages/professionalType";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profissionais" component={Professional} />
      <Route path="/tipos-de-profissional" component={ProfessionalType} />
        <Route path="/novo-profissional" component={NewProfessional} />
      <Route path="/novo-tipo-de-profissional" component={NewProfessionalType} />
    </Switch>
  );
};

export default Routes;
