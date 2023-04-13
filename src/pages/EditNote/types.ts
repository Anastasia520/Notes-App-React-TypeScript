import { NoteData, Tag } from "../../helpers/types/globalTypes"

export type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void
  onAddTag: (tag: Tag) => void
  allTags: Tag[]
}
