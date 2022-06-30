import {useState} from 'react';
import {useDispatch} from 'react-redux';
import loginImg from '../assets/img/login-page-photo.png';
// import Input from '../cmps/Input';
import {login} from '../store/actions/authActions';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullname: '',
  });

  const handleLogin = (ev) => {
    ev.preventDefault();
    dispatch(login(credentials));
  };

  const updateCredentials = (ev) => {
    setCredentials((prev) => ({...prev, [ev.target.name]: ev.target.value}));
  };

  return (
    <section className="login-page ">
      <div className="content-container flex justify-center">
        <div className="img-container">
          <img src={loginImg} alt="" />
        </div>
        <div className="form-container flex flex-column">
          <h1 className="logo">Insta</h1>

          <form className="flex flex-column" onSubmit={handleLogin}>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={updateCredentials}
            />
            <input
              type="Password"
              name="password"
              value={credentials.password}
              onChange={updateCredentials}
            />
            {/* <Input
              label={'Username '}
              inputId={'username'}
              type={'text'}
            />
            <Input label={'Password'} inputId={'password'} type={'password'} /> */}
            <button>Log in</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
