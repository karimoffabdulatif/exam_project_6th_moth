/* eslint-disable no-const-assign */
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SnackbarWithDecorators from "../../components/notification";
import Najot_Talim from '../../assets/icon_najot_talim.ico'
import "./login.css"

const Login = () => {
  const [form, setForm] = useState ({})
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [type, setType] = useState ("")

  const handleChange=(event)=>{
    const {value, name} = event.target
    setForm ({...form, [name]:value})

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setOpen(true)
    const {username, password} =form
    if(username === "admin" && password === '123'){
      setOpen(true)
      setType("success")
      setTimeout(()=>{
        navigate("/main")
      }, 1500)
    }else{
      setOpen(true)
      setType("danger")
    }
  setOpen(true)
  }

  return (
   <div className="login-page">
    <img src={Najot_Talim} alt="icon_login" className="icon_login"/>
     <div className="container">
      <SnackbarWithDecorators open={open} setOpen={setOpen} type={type}/>
      <div className="row mt-2">
        <div className="col-md-6 offset-3 ">
        <div className="card">
          <div className="card-header">
            <h1 className="text-center text-primary">Exam Project</h1>
          </div>
          <div className="card-body">
          <form id="submit" onSubmit={handleSubmit}>
          <TextField fullWidth label="Username" id="username"  className="my-2" onChange={handleChange} name="username"/>
          <TextField fullWidth label="Password" type="password" id="password" className="my-2" onChange={handleChange} name="password"/>

          </form>
          </div>
          <div className="card-footer">
            <Button variant="contained" color="primary" type="submit" form="submit">Login</Button>
          </div>
        </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Login
