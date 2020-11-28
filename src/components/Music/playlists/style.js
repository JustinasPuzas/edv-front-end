import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    card:{
        marginRight: 30,
        marginBottom: 30,
        marginBottom: 20,
        direction:'column',
        maxWidth: '50vw',

    },
    cardContent:{
        justify: 'space-between',
        alignContent: 'space-between',
        alignItems: 'flex-start',

    },
    cardContentChildren:{
        marginTop: 10,
        margin:0,
        justify: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    button:{

    },
    listItemText:{
        marginLeft: '5px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-between',
        justify: 'space-between',
        alignItems: 'space-between',
        margin: 5,
        width: 'full',
        minWidth: '48vw',
        maxWidth: '50vw',
    },
    list: {
        maxWidth: 'auto',
        minHeight: '64vh',
        maxHeight: '64vh',
        overflow: 'auto',
    },
    dialogFrame: {
        padding: '10px',
        margin: '10px'
    }
}));