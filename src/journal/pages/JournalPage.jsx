import { MailOutline } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
      <JournalLayout>
        {/* <Typography>Laborum excepteur tempor elit do nostrud laboris sint proident id. Quis ut consequat veniam pariatur reprehenderit nostrud deserunt dolore. Id non reprehenderit duis commodo esse exercitation duis anim amet ullamco. Magna velit anim elit nisi pariatur id. Laborum anim veniam amet eu culpa ea duis consectetur pariatur eu cillum duis commodo proident. Aliqua amet dolor id reprehenderit irure adipisicing laborum do aute.</Typography> */}
        {/* NothingSelected */}
        <NothingSelectedView/>
        {/* NoteView */}
      </JournalLayout>
  )
}
