import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear cuenta'>
      <form>
        <Grid 
          container
        >
          <Grid 
            item
            size={ 12 }
            sx={{ mt: 2 }}
          >
            <TextField
              label="Nombre"
              type='text'
              placeholder='Jhon Connor'
              fullWidth                
            />
          </Grid>

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
            />
          </Grid>

          <Grid size={12} container spacing={2} sx={{ my: 2 }}>
            <Grid item size={{ xs: 12}}>
              <Button variant='contained' fullWidth>
                Crear
              </Button>
            </Grid>
          </Grid>

          <Grid container size={12} flexDirection={'row'} justifyContent={'end'}>
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} to={'/auth/login'}>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}