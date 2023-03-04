import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "./helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
 const collegeInputRef=useRef()

  const [error, setError] = useState();
  const AddUserHandler = (event) => {
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredCollegeName=collegeInputRef.current.value
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0||
      enteredCollegeName.trim().length===0
    ) {
      setError({
        title: "Invalid input!",
        message: "Please try again",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Try different age (>0)",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge,enteredCollegeName);
    nameInputRef.current.value('')
    ageInputRef.current.value('')
    collegeInputRef.current.value('')
  };

 

 
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            
            ref={ageInputRef}
          />
           <label htmlFor="college">CollegeName</label>
          <input
            type="text"
            id="college"
            
            ref={collegeInputRef}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
