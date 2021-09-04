import { createStyles, makeStyles, Modal, Theme } from '@material-ui/core';
import React from 'react';

function rand() {
return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
const top = 50 + rand();
const left = 50 + rand();

return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
};
}

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    },
}),
);

function ComModal({open, closeFunc, contents}:any){

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    return (
        <Modal
        open={open}
        onClose={closeFunc}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
        {contents}
        </div>
      </Modal>
    );
};

export default ComModal;