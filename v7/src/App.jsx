import { Routes, Route } from "react-router-dom"

import Layout from "@layouts"
import {
  Home,
  Blog,
  Article,
  Projects,
  Education,
  Roadmap,
  Travel,
  Desk,
  About,
} from "@pages"

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:article" element={<Article />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/desk" element={<Desk />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
