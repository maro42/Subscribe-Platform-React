import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import {Dialog,DialogContent,DialogTitle as MuiDialogTitle} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';


const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });


type DialogType = {
    onClose? :  ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined;
    children?: React.ReactNode;
    classes? : object;
    disableBackdropClick?:boolean;
    disableEscapeKeyDown?:boolean;
    maxWidth	?:'lg'| 'md'| 'sm'| 'xl'| 'xs'| false;
    open?:boolean
    title?:string;
}

export default function CustomDialog({
    onClose,
children,
classes,
disableBackdropClick,
disableEscapeKeyDown,
maxWidth,
open,
title
}:DialogType){

    const DialogTitle = withStyles(styles)((props:any) => {
        const { children, classes, onClose, ...other } = props;
        return (
          <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
              <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
              </IconButton>
            ) : null}
          </MuiDialogTitle>
        );
      });

return(

    <Dialog onClose={onClose} open={open!} >
        <DialogTitle id="customized-dialog-title" onClose={onClose}>
            {title}
        </DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
    </Dialog>

)

}
