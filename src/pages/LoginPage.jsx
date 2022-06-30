import { useState } from 'react';
import { useDispatch } from 'react-redux';
import loginImg from '../assets/img/login-page-photo.png';
// import Input from '../cmps/Input';
import { login, signup } from '../store/actions/authActions';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [isSignUp, setIsSignUp] = useState(false);

  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullname: '',
  });

  const handleLogin = (ev) => {
    ev.preventDefault();
    isSignUp ? dispatch(signup(credentials)) : dispatch(login(credentials));
  };

  const updateCredentials = (ev) => {
    setCredentials((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };

  const signUpAdditionalInputs = (
    <>
      <div className='input-container'>
        <label htmlFor=''>Confirm Password</label>
        <input
          type='password'
          name='confirmPassword'
          value={credentials.confirmPassword}
          onChange={updateCredentials}
        />
      </div>
      <div className='input-container'>
        <label htmlFor=''>Email</label>
        <input
          type='email'
          name='email'
          value={credentials.email}
          onChange={updateCredentials}
        />
      </div>
      <div className='input-container'>
        <label htmlFor=''>Full name</label>
        <input
          type='text'
          name='fullname'
          value={credentials.fullname}
          onChange={updateCredentials}
        />
      </div>
    </>
  );

  return (
    <section className='login-page '>
      <div className='content-container flex justify-center'>
        <div className='img-container'>
          <img src={loginImg} alt='' />
        </div>
        <div className='right-side'>
          <div className='form-container flex flex-column'>
            <h1 className='logo'>Insta</h1>

            <form className='flex flex-column' onSubmit={handleLogin}>
              <div className='input-container'>
                <label htmlFor='username'>Username</label>
                <input
                  type='text'
                  name='username'
                  value={credentials.username}
                  onChange={updateCredentials}
                />
              </div>
              <div className='input-container'>
                <label htmlFor=''>Password</label>
                <input
                  type='password'
                  name='password'
                  value={credentials.password}
                  onChange={updateCredentials}
                />
              </div>
              {isSignUp && signUpAdditionalInputs}
              <button>{isSignUp ? 'Signup' : 'Log in'}</button>
            </form>
          </div>
          <div className='switch-mode-container'>
            <span>
              {isSignUp
                ? 'Already have an account? '
                : `Don't have an account? `}
              <span onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? 'Login' : 'Sign up'}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
