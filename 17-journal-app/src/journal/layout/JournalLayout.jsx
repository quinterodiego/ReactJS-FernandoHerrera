/* eslint-disable react/prop-types */
import { Box } from '@mui/system'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { Toolbar } from '@mui/material'

const drawerWidth = 240

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
