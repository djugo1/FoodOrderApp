import classes from './Modal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';

function Backdrop(props){
    return (<div onClick={props.onClose} className={classes.backdrop}></div>);
}

function ModalOverlay(props){
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
}

function Modal(props){
    const elemntId = document.getElementById("overlays");
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,elemntId)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,elemntId)}
        </React.Fragment>
    );
}

export default Modal;