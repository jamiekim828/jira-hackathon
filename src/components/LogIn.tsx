import { useForm, SubmitHandler } from 'react-hook-form';
// MUI
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

// type
type Inputs = {
  email: string;
  password: string;
  exampleRequired: string;
};

export default function LogIn() {
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
      <div className='login-container'>
        <div className='login'>
          <div className='login-title'>
            <h1>Sign in</h1>
            <span>
              Don't have an account? <a href='/'>register</a>
            </span>
          </div>
          <form
            id='form'
            className='flex flex-col'
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type='text'
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              placeholder='Email'
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
              type='text'
              {...register('password', { required: true })}
              placeholder='Password'
            />

            {errors.email?.type === 'required' && 'Email is required'}
            <button className='signin-btn'>Register</button>
          </form>
        </div>
      </div>
    </section>
  );
}
