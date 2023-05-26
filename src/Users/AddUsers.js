import React , {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUsers.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) =>{
    const [enteredUsername , setEnteredUsername] =useState('');
    const [enteredUseraddress, setEnteredUseraddress] =useState('');
    const [enteredUserage , setEnteredUserage] =useState('');
    const [error , setError] =useState();
    const addUserHandler = (event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 ||enteredUseraddress.trim().length ===0 || enteredUserage.trim().length===0){
            setError({
                title :'You have entered invalid Input',
                message :"Please enter valid name , address & age (non-empty values)"
            })
            return;
        }

        if(+enteredUserage<1){
            setError({
                title:"Invalid age",
                message:"Age must be greater than 0 (Age>0)"

            })
            return;
        }
        props.onAddUser(enteredUsername , enteredUseraddress ,enteredUserage);
        setEnteredUseraddress('');
        setEnteredUserage('');
        setEnteredUsername('');
        console.log(enteredUsername,enteredUserage,enteredUseraddress);
        
    }

     const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);
     }

     const useraddressChangeHandler = (event) =>{
        setEnteredUseraddress(event.target.value);
     }
     const userageChangeHandler = (event) =>{
        setEnteredUserage(event.target.value);
     }

     const errorHandler = () =>{
        setError(null);
     }
    return(
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>} 
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
        <label htmlFor="username"  >Name : </label>
        <input type="text"  id="username" value={enteredUsername} onChange={usernameChangeHandler}/>
        <label htmlFor="useraddress" >Address : </label>
        <input type="text"  id="useraddress" value={enteredUseraddress}   onChange={useraddressChangeHandler}/>
        <label htmlFor="age">Age (Years) : </label>
        <input type="number"  id="age"value= {enteredUserage} onChange={userageChangeHandler}/>
        <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
        
    );

}
export default AddUser;
