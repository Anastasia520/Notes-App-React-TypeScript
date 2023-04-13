// import { it, describe } from "vitest"
// import { render, screen } from "@testing-library/react"
// import { HashRouter, MemoryRouter, Route, Routes } from "react-router-dom"

// import { WrappedApp, App } from "./App"

// describe("App", () => {
//   it("Render Hello World", () => {
//     //ARRANGE
//     render(<WrappedApp />)
//     //ACT
//     //EXPECT
//     expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
//       "Hello World"
//     )
//   })

//   it("Render not found page", () => {
//     //ARRANGE
//     render(
//       <MemoryRouter initialEntries={["/not-exist"]}>
//         <App />
//       </MemoryRouter>
//     )
//     //ACT
//     //EXPECT
//     expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
//       "Not Found"
//     )
//   })
// })
