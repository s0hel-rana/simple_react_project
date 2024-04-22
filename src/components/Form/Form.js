import React, { useState } from 'react'
import style from './form.module.css'

export default function Form() {
  const [user, setUser] = useState({name:'',email:'',password:''});
  const {name, email,password} = user;

  const handleChange = (e) =>{
    // const filedName = e.target.name;
    setUser({...user,[e.target.name]:e.target.value});

    // if(filedName === 'email'){
    //   setUser({name, email:e.target.value, password});
    // }
    // if(filedName === 'password'){
    //   setUser({name, email, password:e.target.value});
    // }
  };
  const handleFormSubmit = (e) =>{
    console.log('form is submitted');
    console.log(user);
    e.preventDefault();
  };
  return (
    <div>
      <h1>Registration Form</h1>
      <form action="" onSubmit={handleFormSubmit}>
       <div className={style.formGroup}>
        <label htmlFor="name">Name : </label>
          <input type="text" name='name' value={name} onChange={handleChange} />
       </div>
       <div className={style.formGroup}>
        <label htmlFor="email">Email : </label>
          <input type="email" name='email' value={email} onChange={handleChange} />
       </div>
       <div className={style.formGroup}>
        <label htmlFor="password">Password : </label>
          <input type="password" name='password' value={password} onChange={handleChange} />
       </div>
       <div className={style.formGroup}>
        <button type='submit'>Submit</button>
       </div>
      </form>
    </div>
  )
}
