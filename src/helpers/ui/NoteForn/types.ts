import { NoteData, Tag } from "../../types/globalTypes"

export type NoteFormProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  allTags: Tag[]
} & Partial<NoteData>
