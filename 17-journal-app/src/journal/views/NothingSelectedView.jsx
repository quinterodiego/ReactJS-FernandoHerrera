import { Grid2 as Grid, Typography } from '@mui/material'
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export const NothingSelectedView = () => {
  return (
    <Grid container spacing={0}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', padding: 4, borderRadius: 3 }}
    >
      <Grid item xs={12} >
        <StarOutlineIcon sx={{ fontSize: 100, color: 'white'}} />
      </Grid>
      <Grid item xs={12} >
        <Typography variant="h5" color="white">
          Selecciona o crea una entrada
        </Typography>
      </Grid>
    </Grid>
  )
}
