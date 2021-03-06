import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Paper } from '@material-ui/core'
import DoneButton from "../../Components/Buttons/DoneButton";
import BackButton from "../../Components/Buttons/BackButtonMarket";
import BackButtonMyItem from "../../Components/Buttons/BackButtonMyItem";
import EditPostForm from "../../Components/IPostForm/EditIpostForm";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        pageContent: {
            margin: theme.spacing(10),
            padding: theme.spacing(3),
            backgroundColor: 'rgba(0,1,36,1)',
            [theme.breakpoints.down('xl')]: {
                width: '60%',
                margin: 'auto',
                marginTop: '6.8em',
                height: '750px',
            },
            [theme.breakpoints.down('xs')]: {
                width: '90%',
                margin: 'auto',
                marginTop: '5em',
                height: '660px'
            },
        },

    })
);


function EditIpost() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <Paper className={classes.pageContent}>

                <EditPostForm />
                <DoneButton />
                <BackButton />
                <BackButtonMyItem />

            </Paper>


        </React.Fragment >
    );
};

export default EditIpost;