import { Box, Divider, Drawer, Grid2 as Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

export const Sidebar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component={'nav'}
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>Diego Quintero</Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'].map(text => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNotIcon />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} secondary='asdlg aldgklak laksgjs fgh asjhasdg '>

                    </ListItemText>
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
