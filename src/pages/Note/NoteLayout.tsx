import { useParams, Navigate, Outlet } from "react-router-dom"
import { NoteLayoutProps } from "./types"

export default function NoteLayout({ notes }: NoteLayoutProps) {
  const { id } = useParams()

  const note = notes.find((findingNote) => findingNote.id === id)

  if (!note) return <Navigate to="/" replace />

  return <Outlet context={note} />
}
