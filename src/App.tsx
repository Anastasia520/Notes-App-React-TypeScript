import { Route, Routes } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"

import NotFound from "./pages/NotFound"
import NewNote from "./pages/NewNote/NewNote"
import NotesList from "./pages/NotesList/NotesList"
import NoteLayout from "./pages/Note/NoteLayout"
import Note from "./pages/Note/Note"
import EditNote from "./pages/EditNote/EditNote"
import useApp from "./useApp"

export function App() {
  const {
    tags,
    notesWithTags,
    onCreateNote,
    onEditNote,
    onDeleteNote,
    updateTag,
    addTag,
    deleteTag,
  } = useApp()

  return (
    <Container className="my-4">
      <Routes>
        <Route
          path="/"
          element={
            <NotesList
              allTags={tags}
              notes={notesWithTags}
              updateTag={updateTag}
              deleteTag={deleteTag}
            />
          }
        />
        <Route
          path="/new"
          element={
            <NewNote onSubmit={onCreateNote} onAddTag={addTag} allTags={tags} />
          }
        />
        <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
          <Route index element={<Note onDelete={onDeleteNote} />} />
          <Route
            path="edit"
            element={
              <EditNote
                onSubmit={onEditNote}
                onAddTag={addTag}
                allTags={tags}
              />
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  )
}
export default App
