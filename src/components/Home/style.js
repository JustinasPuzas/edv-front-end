import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
    root:{
      display: 'flex',
      justifyContent: 'flex-start',
    },
    panel:{
      direction: 'row',
      alignItems: 'center',
      alignContent: 'center'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
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
  }));