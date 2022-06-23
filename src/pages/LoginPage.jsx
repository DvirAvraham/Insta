import loginImg from '../assets/img/login-page-photo.png';
import Input from '../cmps/Input';

const LoginPage = () => {
  return (
    <section className='login-page '>
      <div className='content-container flex justify-center'>
        <div className='img-container'>
          <img src={loginImg} alt='' />
        </div>
        <div className='form-container flex flex-column'>
          <h1 className='logo'>Insta</h1>

          <form className='flex flex-column'>
            <Input
              label={'Username or email'}
              inputId={'usernameOrEmail'}
              type={'text'}
            />
            <Input label={'Password'} inputId={'password'} type={'password'} />
            <button>Log in</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
