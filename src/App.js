import "./App.css";
import { useState } from 'react';
import SideMenu from "./components/molecules/SideMenu";
import Main from "./components/atoms/Main";
import TopBar from './components/molecules/TopBar';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  root: { display: "flex" },
});

function App() {
  const classes = styles();
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenuOpen = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <CssBaseline />
        <TopBar onOpen={toggleMenuOpen}/>
        <SideMenu open={openMenu} toggle={toggleMenuOpen}/>
        <Main>
          <Routes />
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
