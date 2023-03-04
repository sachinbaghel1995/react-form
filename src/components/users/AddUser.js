import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser=(props)=>{

    const [enteredUser,setEnteredUser]=useState('')
    const [enteredAge,setEnteredAge]=useState('')
    const [error,setError]=useState()
    const AddUserHandler=(event)=>{
event.preventDefault()
if(enteredUser.trim().length===0 || enteredAge.trim().length===0){
    setError({
        title:'Invalid input!',
        message:'Please try again'
    })
    return
}

if(+enteredAge<1){
    setError({
        title:'Invalid Age',
        message:'Please Try different age (>0)'
    })
    return
}
props.onAddUser(enteredUser,enteredAge)
setEnteredUser('')
setEnteredAge('')
    }

    const usernameChangeHandeler=(event)=>{
        setEnteredUser(event.target.value)
    }

    const ageChangeHandeler=(event)=>{
        setEnteredAge(event.target.value)
    }
    const errorHandler=()=>{
        setError(null)
    }
return (
    <div>
       {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={AddUserHandler}>
        <label htmlFor='username'>UserName</label>
        <input type='text' id='username' onChange={usernameChangeHandeler} value={enteredUser}/>
        <label htmlFor='age'>Age</label>
        <input type='number' id='age' onChange={ageChangeHandeler} value={enteredAge}/>
        <Button type='submit'>Submit</Button>
    </form>
    </Card>
    </div>
)
}
export default AddUser