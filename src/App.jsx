import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"

import HomePage from "./pages/HomePage"
import ProjectDetailsPage from "./pages/ProjectDetailsPage"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/projects/:id"
          element={<ProjectDetailsPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App