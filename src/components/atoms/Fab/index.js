import React from "react";
import { Fab as MaterialFab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import styles from "./styles";
import { Link } from "react-router-dom";

const Fab = (props) => {
  const classes = styles();
  const { aria = "", color = "primary", to = "/" } = props;
  return (
    <MaterialFab
      color={color}
      component={Link}
      to={to}
      className={classes.fab}
      aria-label={aria}
    >
      <Add />
    </MaterialFab>
  );
};

export default Fab;
