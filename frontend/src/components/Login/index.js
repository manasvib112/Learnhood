import React, { useState } from 'react'
import './style.css'
import Ellipse from '../../assets/images/Ellipse.png'
import axios from 'axios'
import LoginModal from '../../lib/modals/LoginModal'
import { useHistory } from 'react-router'

axios.defaults.baseURL = 'http://localhost:1337'

const _loginModal = new LoginModal()

const Login = (props) => {
  const history = useHistory()
  const [error, setError] = useState(null)
  const setIsLogin = props.setIsLogin
  console.log('this is props login', props)
  const [login, setLogin] = useState({ email: '', password: '' })
  const handleChange = (event) => {
    if (event.target.name === 'email') {
      setLogin({ ...login, email: event.target.value }) //we have spread the login and password part so that it will stay on the page
    } else {
      setLogin({ ...login, password: event.target.value })
    }
    // console.log(event.target.name);
  }
  const handleSubmit = async (event) => {
    event.preventDefault() //to prevent the page from refresh we use this preventDefault
    console.log(login)
    const hasError = await _loginModal.validate(login)
    const { valid } = hasError
    if (valid) {
      await _loginModal
        .login(login)
        .then((data) => {
          // console.log(data);
          history.push('/home')
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      setError(hasError)
    }
  }
  return (
    <div className='login-container'>
      <img classname='Ellipse' alt='learnhood' src={Ellipse}></img>
      <input
        name='email'
        type='text'
        placeholder='Email'
        onChange={handleChange}
        value={login.email}
      ></input>
      {error && error.email ? (
        <span className='error-message'>{error.email[0]}</span>
      ) : null}
      <input
        name='password'
        type='password'
        placeholder='Password'
        onChange={handleChange}
        value={login.password}
      ></input>
      {error && error.password ? (
        <span className='error-message'>{error.password[0]}</span>
      ) : null}
      <button type='submit' onClick={handleSubmit}>
        Login
      </button>
      <span>
        Don't have an account?{' '}
        <a
          onClick={() => {
            setIsLogin(false)
          }}
        >
          Sign Up
        </a>
      </span>
      <a>Forget Password?</a>
    </div>
  )
}

export default Login
