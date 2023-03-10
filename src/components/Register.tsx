import { useForm, SubmitHandler } from 'react-hook-form';
// MUI
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
// image file
import image from '../assets/background.jpg.webp';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/reduxHook';
import { useAppSelector } from '../hooks/reduxHook';
import { fetchAllUsers } from '../redux/userReducer';
import { addUser } from '../redux/userReducer';

import { useNavigate } from 'react-router-dom';

type Inputs = {
  fullName: string;
  email: string;
  password: string;
  password_confirm: string;
  phone: number;
  exampleRequired: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const index = users.findIndex((user) => user.email === data.email);
    if (index === -1) {
      dispatch(addUser(data));
    }
  };

  console.log(watch('email'));
  const users = useAppSelector((user) => user.userReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <section>
      <div className='register'>
        <div className='col-1'>
          <img src={image} alt='background-img' />
        </div>
        <div className='col-2'>
          <div className='register-title'>
            <h1>Register</h1>
            <span>
              Do you have account? <a href='/login'>sign in</a>
            </span>
          </div>
          <form
            id='form'
            className='flex flex-col'
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type='text'
              {...register('fullName', { required: true })}
              placeholder='Full name'
            />
            {errors.fullName?.type === 'required' && (
              <p>
                <WarningAmberIcon color='error' sx={{ fontSize: '14px' }} />
                Fill in your name here
              </p>
            )}

            <input
              type='text'
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              placeholder='E-mail'
            />
            {errors.email && errors.email.type === 'required' && (
              <p>
                <WarningAmberIcon color='error' sx={{ fontSize: '14px' }} />
                Email is required
              </p>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <p>
                <WarningAmberIcon color='error' sx={{ fontSize: '14px' }} />
                Please check if the email is correct
              </p>
            )}
            <input
              type='password'
              {...register('password', { required: true, minLength: 2 })}
              placeholder='Password'
            />
            {errors.password && errors.password.type === 'required' && (
              <p>
                <WarningAmberIcon color='error' sx={{ fontSize: '14px' }} />
                Password is required
              </p>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <p>
                <WarningAmberIcon color='error' sx={{ fontSize: '14px' }} />
                Password should be longer than 2 characters
              </p>
            )}
            <input
              type='password'
              {...register('password_confirm', {
                required: true,
                validate: (value: string) => value === watch('password'),
              })}
              placeholder='Confirm password'
            />
            {errors.password_confirm &&
              errors.password_confirm.type === 'required' && (
                <p>
                  <WarningAmberIcon color='error' sx={{ fontSize: '14px' }} />
                  Please confirm the password
                </p>
              )}
            {errors.password_confirm &&
              errors.password_confirm.type === 'validate' && (
                <p>
                  <WarningAmberIcon color='error' sx={{ fontSize: '14px' }} />
                  Passwords do not match
                </p>
              )}
            <input
              type='text'
              {...register('phone', { required: true })}
              placeholder='Phone'
            />

            <button className='register-btn' onClick={() => navigate('/login')}>
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
