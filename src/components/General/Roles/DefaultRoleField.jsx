import React from 'react';
import { Notification } from '../../';
import { Formik } from 'formik';
import { useMutation } from '@apollo/client';
import { updateDefaultRoleMutation } from '../../../grpahql/mutations';
import { useStyles } from './style';
import {MenuItem, FormControl, Select, Typography, Grid, Card, CardActionArea, CardContent, TextField, Container, Button } from '@material-ui/core';

export function DefaultRoleField({
    defaultRole,
    setDefaultRole,
    match,
    roles
}) {
    const classes = useStyles();
    const [ updateDefaultRole ] = useMutation(updateDefaultRoleMutation);

    const [ params, setParams] = React.useState({
        open: false,
        type: "success", 
        msg: {
            head: '',
            info: ``
        }
    });

    const updateRole = async (defaultRole) =>{
        try{

            const response = await updateDefaultRole({
                variables:{
                    guildId: match.params.id,
                    defaultRole,
                }
            })

            setParams({
                open: true,
                type: "success",
                msg: {
                    head: "Default role was changed",
                    info: ``
                }
            });

            setDefaultRole(defaultRole)
        }catch (err) {

            setParams({
                open: true,
                type: "error",
                msg: {
                    head: "Unknown Error",
                    info: `try again later`
                }
            });
        }
    }

    return (
    <Grid item className={classes.card}>
        <Card direction='row'>
            <CardContent>
                <Formik
                    initialValues = {{ defaultRole: defaultRole}}
                    onSubmit={async (data, {setSubmitting}) => {
                        setSubmitting(true)
                        await updateRole(data.defaultRole)
                        setSubmitting(false)
                    }}
                >
                    {({values,  isSubmitting, handleChange, handleBlur, handleSubmit}) =>(

                            <form onSubmit={handleSubmit}>
                                <Grid container justify = 'center' direction='column' className={classes.cardContent}>
                                    <Grid item xs className={classes.cardContentChildren}>
                                        <Typography>Verified Role</Typography>
                                    </Grid>
                                    <Grid item xs className={classes.cardContentChildren}>
                                        <Select name="defaultRole" onChange={handleChange} value={values.defaultRole}>
                                            <MenuItem  value={'0'} selected={null === values.defaultRole} key={'0'}>OFF</MenuItem>
                                            {roles.map((role) =>(
                                                <MenuItem  value={role.id} selected={role.id === values.defaultRole} key={role.id}>{role.name}</MenuItem>
                                            ))}
                                        </Select>
                                    </Grid>
                                    <Grid item xs className={classes.cardContentChildren}>
                                    <Button disabled={isSubmitting} variant='outlined' type="submit" children="Update Role" />
                                    </Grid>
                                    <pre>{JSON.stringify(values, null, 2)}</pre>
                                </Grid>
                                
                            </form>
                        )
                    }
                </Formik>
            </CardContent>
        </Card>
        <Notification
            params = {params}
            setParams = {setParams}
        />
    </Grid>
    )
}