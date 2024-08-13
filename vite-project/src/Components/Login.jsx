import React from 'react'
import { useDispatch } from 'react-redux'
import {login, logout} from '../Features/user'
function Login() {
    const dispatch = useDispatch()
  return (
    <>
    <button onClick={() => dispatch(login({name : "Ramona", age : 20, email: "ramona@gmail.com"}))} className='border px-4 '>Login</button>
    <button onClick={() => dispatch(logout())} className='border px-4'> Logout</button>
    </>
  )
}

export default Login