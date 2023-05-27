import React , {useState , useRef} from 'react';
import Card from '../UI/Card';
import classes from './AddUsers.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) =>{
    const nameInputRef = useRef();
    const addressInputRef = useRef();
    const ageInputRef = useRef();
    const collegeNameRef=useRef();

    
    const [error , setError] =useState();
    const addUserHandler = (event)=>{
        event.preventDefault();
        console.log(nameInputRef , addressInputRef , ageInputRef , collegeNameRef)
        const enteredUsername =nameInputRef.current.value;
        const enteredUseraddress =addressInputRef.current.value;
        const enteredUserage=ageInputRef.current.value;
        const enteredCollegeName =collegeNameRef.current.value;
        if(enteredUsername.trim().length===0 ||enteredUseraddress.trim().length ===0 || enteredUserage.trim().length===0 ||enteredCollegeName.trim().length===0){
            setError({
                title :'You have entered invalid Input',
                message :"Please enter valid name , address , college name & age (non-empty values)"
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
        props.onAddUser(enteredUsername , enteredUseraddress ,enteredUserage , enteredCollegeName);
        nameInputRef.current.value='';
        addressInputRef.current.value='';
        ageInputRef.current.value='';
        collegeNameRef.current.value='';

        
        
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
        <input 
        type="text" 
         id="username" 
          ref={nameInputRef} />
        <label htmlFor="useraddress" >Address : </label>
        <input 
        type="text"
          id="useraddress"
            ref={addressInputRef}/>
        <label htmlFor="collegename">College Name : </label>
        <input 
        type="text"
          id="usercollegename"
            ref={collegeNameRef}/>
        <label htmlFor="age">Age (Years) : </label>
        <input 
        type="number"
          id="age" 
           ref={ageInputRef}/>
        <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
        
    );

}
export default AddUser;
