import { NoteData, Tag } from "../../helpers/types/globalTypes"

export type NewNoteProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  allTags: Tag[]
}
