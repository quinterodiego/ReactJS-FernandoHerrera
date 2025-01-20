import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Grid2 from '@mui/material/Grid2';
import { Button } from '@mui/material';

export const LoginPage = () => {
  return (
    <Grid container spacing={0}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid 
        item
        className='box-shadow'
        xs={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>Login</Typography>
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
              <Grid item size={12}>
                <Button variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}