import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import Pokedex from "./routes/Pokedex.jsx"
import Root from "./routes/Root.jsx"
import About from "./routes/About.jsx"
import PokemonDetails from "./routes/PokemonDetails.jsx"
import { RouterProvider, createHashRouter } from "react-router-dom"

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Pokedex />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pokemon/:name",
        element: <PokemonDetails />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
