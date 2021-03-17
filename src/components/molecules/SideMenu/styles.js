import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
    sidebar: {
        width: 250,
    },
    paper: {
        backgroundImage: `linear-gradient(#f0faff,#b2dcff)`,
    },
    toolbar: theme.mixins.toolbar
}));

export default styles;
