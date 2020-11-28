import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    card:{
        marginRight: 30,
        marginBottom: 30,
        marginBottom: 20,
        direction:'column'
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
    inputField:{

    }
}));