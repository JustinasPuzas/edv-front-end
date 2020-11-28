import React from 'react';
import { useStyles } from './style';
import { Snackbar, Typography, Grid, Card, CardActionArea, CardContent, TextField, Container, Button } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
// types

export function Notification({
    setParams,
    params
}) { 
    const [ loading, setLoading ] = React.useState(false);
    const classes = useStyles();

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setParams({
            open: false,
            type: "",
            msg: {
                head: "",
                info: ``
            }
        });
    };

    return (
        <Snackbar open={params.open} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={params.type}>
                <Typography>{params.msg.head}</Typography>
               <Typography>{params.msg.info}</Typography>
            </Alert>
        </Snackbar>
    )
}