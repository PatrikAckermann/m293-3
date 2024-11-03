import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route, createHashRouter} from "react-router-dom"
import "./index.css"

import Layout from "./Layout"
import Home from "./Pages/Home/Home"
import Projects from "./Pages/Projects/Projects"
import About from "./Pages/About/About"
import Imprint from "./Pages/Imprint/Imprint"

var router = createHashRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="projects" element={<Projects/>} />
      <Route path="about" element={<About/>} />
      <Route path="imprint" element={<Imprint/>} />
  </Route>
), {basename: "/m293"})

export default function App() {
  return (<RouterProvider router={router}/>)
}