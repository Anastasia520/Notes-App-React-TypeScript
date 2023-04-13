import { Note, Tag } from "../../helpers/types/globalTypes"

export type NotesListProps = {
  allTags: Tag[]
  notes: Note[]
  updateTag: (id: string, label: string) => void
  deleteTag: (id: string) => void
}
