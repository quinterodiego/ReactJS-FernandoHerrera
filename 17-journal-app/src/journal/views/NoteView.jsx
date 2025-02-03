import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { TextField } from '@mui/material';
import { ImageGallery } from '../components/ImageGallery';

export const NoteView = () => {
  return (
    <>
      <Grid container direction='row' justifyContent={'space-between'} alignItems={'center'} sx={{ mb: 1 }}>
        <Grid item>
          <Typography fontSize={39} fontWeight={'light'}>
            1 de febrero, 2025
          </Typography>
        </Grid>
        <Grid item>
          <Button color="primary" sx={{ padding: 2 }}>
            <SaveOutlinedIcon />
            Guardar
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <TextField 
          type='text'
          variant='filled'
          fullWidth
          placeholder='Ingrese un título'
          label='Título'
          sx={{ border: 'none', mb: 1 }}
        />
      </Grid>
      <Grid container>
        <TextField 
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='Que sucedió hoy?'
          minRows={5}
        />
      </Grid>

      <ImageGallery />
    </>
  )
}
