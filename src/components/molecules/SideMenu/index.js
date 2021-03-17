import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Hidden
} from '@material-ui/core';
import Profissionais from "../../../pages/professional";
import {Link} from 'react-router-dom';
import {
    Work,
    AssignmentInd,
    Home
} from '@material-ui/icons';
import styles from './styles';


const SideMenu = (props) => {
    const classes = styles();

    const items = [
        {
            name: 'Início',
            url: '/',
            icon: <Home/>
        },
        {
            name: 'Tipos de profissionais',
            url: '/tipo-de-profissionais',
            icon: <AssignmentInd/>
        },
        {
            name: 'Profissionais',
            url: 'profissionais',
            icon: <Work/>
        },
        // You can add more items by passing an array of objects like those above
        ...(props.items ? props.items && Array.isArray(props.items) : [])
    ]

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    const renderIcon = (icon) => {
        if(icon) {
            return (
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
            )
        }
    };

    return (
        <nav>
            <Hidden xsDown implementation="css">
                <Drawer
                    className={classes.sidebar}
                    open
                    variant={'permanent'}
                    anchor={"left"}>
                    <List>
                        {items.map((item, index) => (
                            <ListItem button to={item.url} component={Link} key={index}>
                                {renderIcon(item.icon)}
                                <ListItemText primary={item.name} />
                            </ListItem>))}
                    </List>
                </Drawer>
            </Hidden>
            <Hidden smUp implementation="css">
                <Drawer
                    className={classes.sidebar}
                    variant={'temporary'}
                    open={isOpen}
                    onClose={handleToggle}
                    anchor={"left"}>
                    <List>
                        {items.map((item, index) => (
                            <ListItem button to={item.url} component={Link}  key={index}>
                                {renderIcon(item.icon)}
                                <ListItemText primary={item.name} />
                            </ListItem>))}
                    </List>
                </Drawer>
            </Hidden>
        </nav>
    );
}

export default SideMenu;
