import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Hidden,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Work, AssignmentInd, Home } from "@material-ui/icons";
import styles from "./styles";

const SideMenu = (props) => {
  const classes = styles();
  const { open, toggle } = props;

  const items = [
    {
      name: "Início",
      url: "/",
      icon: <Home />,
    },
    {
      name: "Tipos de profissional",
      url: "/tipos-de-profissional",
      icon: <AssignmentInd />,
    },
    {
      name: "Profissionais",
      url: "profissionais",
      icon: <Work />,
    },
    // You can add more items by passing an array of objects like these above
    ...(props.items ? props.items && Array.isArray(props.items) : []),
  ];

  const renderIcon = (icon) => {
    if (icon) {
      return <ListItemIcon>{icon}</ListItemIcon>;
    }
  };

  const renderList = () => {
    return (
      <>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {items.map((item, index) => (
            <ListItem button to={item.url} component={Link} key={index}>
              {renderIcon(item.icon)}
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </>
    );
  };

  return (
    <nav>
      <Hidden xsDown implementation="css">
        <Drawer
          className={classes.sidebar}
          open
          classes={{
            paper: classes.paper,
          }}
          variant={"permanent"}
          anchor={"left"}
        >
          {renderList()}
        </Drawer>
      </Hidden>
      <Hidden smUp implementation="css">
        <Drawer
          className={classes.sidebar}
          variant={"temporary"}
          open={open}
          classes={{
            paper: classes.paper,
          }}
          onClose={toggle}
          anchor={"left"}
        >
          {renderList()}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default SideMenu;
