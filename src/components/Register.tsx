import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import image from '../assets/background.jpg.webp';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  exampleRequired: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('email'));

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
              {...register('firstName', { required: true })}
              placeholder='First name'
            />
            <input
              type='text'
              {...register('lastName', { required: true })}
              placeholder='Last name'
            />
            <input
              type='text'
              {...register('email', { required: true })}
              placeholder='E-mail'
            />
            <input
              type='text'
              {...register('password', { required: true })}
              placeholder='Password'
            />
            <input
              type='text'
              {...register('password', { required: true })}
              placeholder='Confirm password'
            />
            {errors.email?.type === 'required' && 'Email is required'}
            <button className='register-btn'>Register</button>
          </form>
        </div>
      </div>
    </section>
  );
}
