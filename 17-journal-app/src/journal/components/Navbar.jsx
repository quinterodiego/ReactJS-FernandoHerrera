import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import IconButton from '@mui/material/IconButton';

export const Navbar = () => {
  return (
    <AppBar 
      position="fixed"
      sx={{  }}
    >
      <Toolbar>
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
