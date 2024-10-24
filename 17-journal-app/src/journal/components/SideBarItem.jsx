/* eslint-disable react/prop-types */
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { setActiveNote } from '../../store/journal/journalSlice'

const SideBarItem = ({ id, title, body, date, imageUrls = [] }) => {

  const dispatch = useDispatch()

  const onClickNote = () => {
    dispatch(setActiveNote({ id, title, body, date, imageUrls }))
  }

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 6) + '...' : title;
  }, [title])

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container> 
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}

export default SideBarItem