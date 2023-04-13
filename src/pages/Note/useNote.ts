import { useOutletContext } from "react-router-dom"
import { Note } from "../../helpers/types/globalTypes"

export default function useNote() {
  return useOutletContext<Note>()
}
