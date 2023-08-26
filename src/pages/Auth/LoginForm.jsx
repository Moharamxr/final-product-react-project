import React from 'react'
import Login from '../../components/Auth/Login'

const LoginForm = () => {
  return (
    <div className='d-flex align-items-center'>
      <div className='w-50'>
    <Login/>
      </div>
    <figure className='w-50'>
      <img className='w-100' src="https://www.sme-news.co.uk/wp-content/uploads/2021/11/Login.jpg" alt="" />
    </figure>
    </div>
  )
}

export default LoginForm