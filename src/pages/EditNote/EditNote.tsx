import useNote from "../Note/useNote"
import NoteForm from "../../helpers/ui/NoteForn/NoteForm"
import { EditNoteProps } from "./types"

export default function EditNote({
  onSubmit,
  onAddTag,
  allTags,
}: EditNoteProps) {
  const note = useNote()
  return (
    <>
      <h1>Edit note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        allTags={allTags}
      />
    </>
  )
}
