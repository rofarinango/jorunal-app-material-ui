import { AddOutlined, MailOutline } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { IconButton } from "@mui/material"
import { startNewNote } from "../../store/journal/thunks"
import { useDispatch } from "react-redux"


export const JournalPage = () => {


  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }
  return (
      <JournalLayout>
        {/* <Typography>Laborum excepteur tempor elit do nostrud laboris sint proident id. Quis ut consequat veniam pariatur reprehenderit nostrud deserunt dolore. Id non reprehenderit duis commodo esse exercitation duis anim amet ullamco. Magna velit anim elit nisi pariatur id. Laborum anim veniam amet eu culpa ea duis consectetur pariatur eu cillum duis commodo proident. Aliqua amet dolor id reprehenderit irure adipisicing laborum do aute.</Typography> */}
        {/* NothingSelected */}
        <NothingSelectedView/>
        {/* NoteView */}

        <IconButton
        onClick={onClickNewNote}
          size="large"
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': {backgroundColor: 'error.main', opacity: 0.9},
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{fontSize: 30}}/>
        </IconButton>
      </JournalLayout>
  )
}
