import React from "react";
import ReactDOM from "react-dom";

import Card from '../Card/Card';
import Button from '../UI/Button';
import styles from './ErrorModal.module.css';

const Backdrop = (props) =>{
    return  <div className={styles.backdrop} onClick={props.closeModal}/>
}

const ModalOverlay = props =>{
    return (
        <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <main className={styles.content}>
                    <p>{props.message}</p>
                </main>
                <footer className={styles.actions}>
                    <Button onClick={props.closeModal}>Okay</Button>
                </footer>
        </Card>
    )
}
const ErrorModal = (props) =>{
    return (
        <React.Fragment>
          {ReactDOM.createPortal(<Backdrop closeModal={props.closeModal}/>, document.getElementById('backdrop-root'))}
          {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} closeModal={props.closeModal}/>, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
    
}

export default ErrorModal ;