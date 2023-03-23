import React,{useState, useEffect, useContext} from 'react'
import "./Signin.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { DataAppContext } from '../DataApp'

const Signin = () => {

  const navigate = useNavigate();

  const initialData = {
    username: '',
    password: ''
  }

  const [loginformdata, setFormData] = useState(initialData);

  const [loginstatus, setStatus] = useState(false)

  const [formError, setFormError] = useState(initialData);

  const localContext = useContext(DataAppContext);

  const updateData = (e) => {
    console.log(e.target.id, e.target.value)
    let tempObj = {}
    tempObj[e.target.id] = e.target.value;
    setFormData({
      ...loginformdata, ...tempObj
    })
  }

  const loginFn = () => {
    
    const ret = validation();
    if(ret)
    {

      // user is key name, and formdata is an value
      let temp = JSON.parse(localStorage.getItem('users'));
      // new entry formdata

      let username = loginformdata.username;
      let password = loginformdata.password;

      for(let i = 0; i < temp.length; i++)
      {
        if(temp[i].username === username && temp[i].password === password)
        {
          // setStatus(true);
          navigate("/")

          let Obj = {
            ...localContext.appState,
            loginStatus: true, // means logged in
            username: loginformdata.username
          }

          localContext.setAppState(Obj)
        }
      }
        
    }
    // setFormData(initialData)
  }

  const validation = () => {

    let errorObj = {}

    if(loginformdata.username === ""){
      errorObj.username = "username error";
    }
    if(loginformdata.password === ""){
      errorObj.password = "password error";
    }
    

    //copy errorobj in formerror state
    setFormError(errorObj);

    // if errorobj is not blank
    if(Object.keys(errorObj).length > 0)
    {
      return false;
    }
    else{
      return true;
    }

  }


  useEffect(()=>{
    
    let temp = localStorage.getItem('users')
    console.log(JSON.parse(temp))

  }, [loginstatus])


  return (
    <div className="containerr">

      <h3>Sign In</h3>
      <input type="text" placeholder="Enter Email" id="username" className="form"  onChange={updateData}  />
      <div>{formError.username}</div>
      <input type="password" placeholder="Enter Password" id="password" className="form"  onChange={updateData}   />
      <div>{formError.password}</div>

      {/* <div className="rows">
        <Link to="/signin" ><button onClick={registerFn}>Submit</button></Link>
      </div> */}
      <div className='rows'>
        <button onClick={loginFn} className="button1">Login</button>
      </div>

      <div className="new_acc">
        <div className="inner_acc">
          <Link to="/reg" className="inputs">Create new Account</Link>
        </div>
      </div>
              
      {
        loginstatus && <div>
          <h2>Successfully Login</h2>
        </div>
      }
     </div>
  )
}

export default Signin
