import { Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useSelector } from "react-redux"
import SideBarItem from "./SideBarItem"

// eslint-disable-next-line react/prop-types
export const Sidebar = ({ drawerWidth }) => {

  const { displayName } = useSelector(state => state.auth)
  const { notes } = useSelector(state => state.journal)
  console.log(notes)
  return (
    <Box
      component={'nav'}
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component={'div'}>
            { displayName }
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {
            notes.map(note => (
              <SideBarItem key={note.id} {...note} />
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
