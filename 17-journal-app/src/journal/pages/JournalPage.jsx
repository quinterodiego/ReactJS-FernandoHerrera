import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { NoteView } from "../views/NoteView";
import { IconButton } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          backgroundColor: 'white',
          ':hover': { backgroundColor: 'white', opacity: 0.8 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlinedIcon sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}