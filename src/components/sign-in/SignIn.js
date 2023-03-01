import React,{useRef, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar/Navbar';
import './SignIn.css'

const SignIn = () => {
  const notify = () => toast.success("Successfull login!")
  const [name,setName] = useState("Name");
  const nameRef = useRef()
  function onSubmit(){
    nameRef.current.preventDefault()
    nameRef.current.value="Name"
  }
  return (
    <>
    <div className='sign_in_bg'>
    <Navbar/>
  <div className='signin_card'>
  <form className='inputs' onSubmit={onSubmit}>
  <h4>Name</h4>
  <input ref={nameRef} value={name} type="text" className="input" placeholder="Name" onChange={e => setName(e.target.value)}></input>
  <h4>Email</h4>
  <input type="text" name="text" className="input" placeholder="Email"></input>
  <h4>Password</h4>
  <input type="text" name="text" className="input" placeholder="Password"></input>
  </form>
  <div className='register'>
  <button className='login_btn' onClick={notify}>
  LogIn
</button>
<ToastContainer
autoClose={1000}
position='top-center'
pauseOnHover={false}
limit={1}
/>
<div>
<div className='register_btn'>Register Now </div>
<div className='register_btn'>Forgot Password?</div>
</div>
</div>
  </div>
</div>
</>
  )
}

export default SignIn