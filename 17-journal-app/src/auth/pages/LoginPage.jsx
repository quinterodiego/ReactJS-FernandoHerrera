import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';

export const LoginPage = () => {

  const { email, password, onInputChange, formState } = useForm({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();

  const onSumbit = (e) => {
    e.preventDefault();
    dispatch(checkingAuthentication(email, password));
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSumbit}>
        <Grid 
          container
        >
          <Grid 
            item
            size={ 12 }
            sx={{ mt: 2 }}
          >
            <TextField
              label="Email"
              type='email'
              placeholder='email@gmail.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}                
            />
          </Grid>

          <Grid 
            item
            size={ 12 }
            sx={{ mt: 2 }}
          >
            <TextField
              label="Contraseña"
              type='password'
              placeholder='Contraseña'
              fullWidth
              name='password'
              value={password}    
              onChange={onInputChange}                
            />
          </Grid>

          <Grid size={12} container spacing={2} sx={{ my: 2 }}>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Button type='submit' variant='contained' fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item size={{ xs: 12, sm: 6 }}>
              <Button variant='contained' fullWidth onClick={onGoogleSignIn}>
                <GoogleIcon />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container size={12} flexDirection={'row'} justifyContent={'end'}>
            <Link component={RouterLink} to={'/auth/register'}>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}