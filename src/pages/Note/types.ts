import { Note } from "../../helpers/types/globalTypes"

export type NoteProps = {
  onDelete: (id: string) => void
}

export type NoteLayoutProps = {
  notes: Note[]
}
