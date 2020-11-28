import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        minHeight: '98vh',
        width: '100%',
        paddingX: '20%',
        paddingTop: '2%',
        paddingBottom: '1%'
    },
}));