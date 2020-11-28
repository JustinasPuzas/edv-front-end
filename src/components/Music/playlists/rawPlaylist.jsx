import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { useStyles } from './style';

import { Grid, List, ListItem, ListItemText, Dialog, DialogTitle, Typography} from '@material-ui/core'

export function RawPlaylist({
    match,
    playlist,
    open,
    setOpen,
}) {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false)
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Raw Playlist</DialogTitle>
      <Grid className={classes.dialogFrame}>
        <List>
            {playlist.map((song) => (
                  <p key={song.link}>{song.link}</p>
            ))}
            {/* maybe buton to copy all text */}
        </List>
      </Grid>
    </Dialog>
  );
}

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };