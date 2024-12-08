import { BrowserRouter, Routes, Route } from "react-router"
import { ThemeProvider } from "styled-components"
import Home from "./pages/Home"
import theme from "./theme"
import Artist from "./pages/Artist"
import Playlists from "./pages/Playlists"

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="artistas" element={<Artist />} />
            <Route path="playlists" element={<Playlists />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
