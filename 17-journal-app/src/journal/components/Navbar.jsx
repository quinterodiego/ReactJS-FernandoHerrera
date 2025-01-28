import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid2';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Typography } from '@mui/material';

export const Navbar = ({ drawerWidth }) => {
  return (
    <AppBar 
      position="fixed"
      sx={{ 
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
       }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlinedIcon />
        </IconButton>

        <Grid container sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Typography>Journal App</Typography>

          <IconButton color='error'>
            <LogoutOutlinedIcon />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
