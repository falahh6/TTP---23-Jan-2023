import React, {useState, useRef} from "react";
import styles from './AddUser.module.css';
import Card from '../Card/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';
const AddUser = props =>{
    const userInputName = useRef();
    const userInputAge = useRef();
   
    const [error, setError] = useState();
    const submitHandler = (event) =>{
        const Name = userInputName.current.value;
        const Age = userInputAge.current.value;
        event.preventDefault();
        if(Name.trim().length === 0 || Age.trim().length === 0){
            setError({
                title : 'Invalid Inputs!',
                message : 'Please fill the input fields.'
            })
            return;
        }
        if(Age < 0){
            setError({
                title : 'Invalid Age!',
                message : 'Please fill the valid Age [ > 0 ].'
            })
            return;
        }
        props.onAddUser(Name , Age);
        userInputName.current.value = '';
        userInputAge.current.value ='';
    }
    const errorHandler = () =>{
        setError(null);
    }
        return (
            <React.Fragment>
               {error && <ErrorModal closeModal={errorHandler} title={error.title} message={error.message}/>}
                <Card className={`${styles.input}`}>
                <h4> Please Add new users </h4>
                    <form onSubmit={submitHandler}  >
                        <label htmlFor="name">User Name</label>
                        <input type="text" id="name"  ref={userInputName}/>
                        <label htmlFor="age">User Age</label>
                        <input type="number" id="age"  ref={userInputAge}/>
                        <Button submitHandler={submitHandler}>Add User</Button>
                    </form>
                </Card>
            </React.Fragment>
    )
}

export default AddUser;