import React, { useState } from 'react';
import './Login.css';
import { Link ,useHistory} from 'react-router-dom/cjs/react-router-dom.min';
import { auth } from './firebase';

function Login() {

  const history=useHistory();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const signIn = e => {
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email,password)
    .then(auth=>{
      history.push('/')
    })
    .catch(error => alert(error.message))
  }
  const register=e=>{
    e.preventDefault();
  auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth)=>{
        console.log(auth);
        if(auth){
          history.push('/');
        }
      })
      .catch(error => alert(error.message))
  }

  const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
      .then(result => {
        history.push('/');
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
          <img className='login__logo'
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Image not Found" />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form action="">

          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
        
          <h5>Password</h5>
          <input type="password"  value={password} onChange={e=>setPassword(e.target.value)} />
        
          <button type='submit' onClick={signIn}
          className='login__signInButton'>Sign In</button>
          
          <div className='login__checkbox'>
          <input type="checkbox" />
          <p>Keep me Signed in</p>
          </div>

          <button onClick={register}
          className='login__registerButton'>Create your Amazon Account</button>

        </form>
      </div>
    </div>
  )
}

export default Login
