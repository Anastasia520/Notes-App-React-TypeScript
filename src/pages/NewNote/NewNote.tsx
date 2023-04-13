import NoteForm from "../../helpers/ui/NoteForn/NoteForm"
import { NewNoteProps } from "./types"

export default function NewNote({ onSubmit, onAddTag, allTags }: NewNoteProps) {
  return (
    <>
      <h1>Create a new note</h1>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} allTags={allTags} />
    </>
  )
}
