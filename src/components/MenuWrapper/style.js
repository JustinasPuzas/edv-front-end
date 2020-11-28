import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
      },
      panel:{
        overflow: 'hidden',
        margin: 15,
        direction: 'row',
        alignItems: 'center',
        alignContent: 'center'
      },
      includedGuildsText: {
        marginTop:5,
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',
      },
      gridListIncluded: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        transform: 'translateZ(0)',
      },
      excludedGuildsText:{
        margin: 20,
        display: 'flex',
        justifyContent: 'center',
      },
      gridListExcluded: {
        margin: 10,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        transform: 'translateZ(0)',
      },
      gridListItemIncluded: {
        minWidth: 256,
        minHeight: 256,
        width: 256,
        height: 300,
      },
      gridListItemExcluded: {
        maxWidth: 150,
        maxHeight: 150,
        width: 150,
        height: 128,
      },
      titleBar: {
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
}));