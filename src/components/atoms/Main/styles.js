import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: 20,
    },
    toolbar: theme.mixins.toolbar,
}));

export default styles;
