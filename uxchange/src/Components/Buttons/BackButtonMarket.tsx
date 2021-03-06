import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core'
import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import createStyles from "@material-ui/core/styles/createStyles";
import StorefrontIcon from '@material-ui/icons/Storefront';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            color: '#fff0d6',
            background: 'rgba(0,1,36,1)',
            marginTop: '2em',
            padding: '0.5em 4.95em',
            fontWeight: 'bold',
            textTransform: 'capitalize',
            [theme.breakpoints.down('xs')]: {
                padding: '0.3em 2.95em',
            },
            [theme.breakpoints.up('xs')]: {
                padding: '0.5em 2.95em',
            },
            '&:hover': {
                background: 'rgba(0,1,36,1)',
                color: '#FFCC00',
                fontWeight: 'bold'
            }
        },
        iconstyle: {
            position: 'absolute',
            left: '0.5em',
        },
    })
);



function BackButtonMarket() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <Grid>

                <Button className={classes.root}
                    variant='contained' size='large' type="submit" component={Link} to="/Market Place">

                    Back to
                    <StorefrontIcon style={{ marginLeft: '0.2em', marginRight: '0.2em' }}>
                    </StorefrontIcon>

                    Market
                    <ArrowBackIcon className={classes.iconstyle}>
                    </ArrowBackIcon>

                </Button>

            </Grid>

        </React.Fragment >
    );
};

export default BackButtonMarket;