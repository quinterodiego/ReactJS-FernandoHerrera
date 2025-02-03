import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid2';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Box, Typography } from '@mui/material';

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

        <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" noWrap component='div'>Journal App</Typography>

          <IconButton sx={{ color: 'white' }}>
            <LogoutOutlinedIcon />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
