import "./App.css";
import SideMenu from "./components/molecules/SideMenu";
import Main from "./components/atoms/Main";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  root: { display: "flex" },
});

function App() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <CssBaseline />
        <SideMenu />
        <Main>
          <Routes />
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
