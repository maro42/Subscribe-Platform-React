import React from 'react';
import Dialog from '@material-ui/core/Dialog';

type DialogType = {
    onClose? :  ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined;
    children?: React.ReactNode;
    classes? : object;
    disableBackdropClick?:boolean;
    disableEscapeKeyDown?:boolean;
    maxWidth	?:'lg'| 'md'| 'sm'| 'xl'| 'xs'| false;
    open?:boolean

}


export default function CustomDialog({
    onClose,
children,
classes,
disableBackdropClick,
disableEscapeKeyDown,
maxWidth,
open,
}:DialogType){

return(

    <Dialog onClose={onClose} open={open!} >
        {children}
    </Dialog>

)

}
