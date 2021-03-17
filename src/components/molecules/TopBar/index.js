import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const TopBar = (props) => {
  const { onOpen } = props;

  return (
    <AppBar position={"fixed"}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onOpen}
        >
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
