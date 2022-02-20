import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
 
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    
    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        console.log('SUCCESS');
    };

  return (
    <Fragment>
        <section className="container">
      <h1 class='large text-primary'>Sign In</h1>
      <p class='lead'>
        <i class='fas fa-user'></i> Sign Into Your Account
      </p>
      <form class='form' onSubmit={onSubmit}>
        <div class='form-group'>
          <input type='email' placeholder='Email Address' name='email' value={email}
            onChange={onChange} required/>
        </div>
        <div class='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange}
            minLength='6'
          />
        </div>
        <input type='submit' class='btn btn-primary' value='Login' />
      </form>
      <p class='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
      </section>
    </Fragment>
  );
};
 
export default Login;