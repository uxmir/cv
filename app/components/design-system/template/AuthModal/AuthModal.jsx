"use client"
import React, { useState } from 'react'
import Modal from '../../atoms/Modal/Modal'
import LoginForm from '../../organism/LoginForm/LoginForm'
import SignUpForm from '../../organism/SignUpForm/SignUpForm'
const AuthModal = ({closeModal,closeSignUpModal}) => {
const [form,setForm]=useState('login')
const showSignUpForm=()=>{
    setForm('signup')
}
const showSignInForm=()=>{
    setForm('login')
}
  return (
  <>
  <Modal close={closeModal}>
  <div>
 {
    form === 'login'?  <LoginForm signUpEvent={showSignUpForm}/>:<div></div>
 }
 {
    form === 'signup'?<SignUpForm signInEvent={showSignInForm} event={closeSignUpModal}/>:<div></div>
 }
  </div>
  </Modal>
  </>
  )
}

export default AuthModal
